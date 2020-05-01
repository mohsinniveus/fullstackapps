import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let httpClient: HttpClient;
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        EmployeeService
      ]
    });

    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(EmployeeService);
    
  });

  afterEach(() => {
    httpMock.verify(); //Verifies that no requests are outstanding.
  });
  
  //Test case 1
  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, EmployeeService],
    (httpClient: HttpTestingController, employeeService: EmployeeService) => {

      const employeeItem = [
        {
          "id": 1,
          "firstName": "Test1",
          "lastName": "Test1",
          "emailId": "test1@test.com",
           "active": true
        },
        {
          "id": 2,
          "firstName": "Test2",
          "lastName": "Test2",
          "emailId": "test2@test.com",
           "active": true  
        },
        {
          "id": 3,
          "firstName": "Test3",
          "lastName": "Test3",
          "emailId": "test3@test.com",
           "active": true  
        }
      ];

      employeeService.getEmployeesList()
      .subscribe((employees: any) => {
        expect(employees.length).toBe(3);
      });

      let req = httpMock.expectOne('http://localhost:8080/spring-boot-rest-api/api/v1/employees');
      expect(req.request.method).toBe("GET");

      req.flush(employeeItem);
      httpMock.verify();

  })));

  //Test Case 2
  it('should add an employee and return it', ()=> {
      const newEmp: Employee = {"firstName": "Test1","lastName": "Test1","emailId": "test1@test.com","active": true}
      service.createEmployee(newEmp).subscribe(
        data =>expect(data).toEqual(newEmp,'should return the employee'),fail
      );
      
      // addEmploye should have made one request to POST employee
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newEmp);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newEmp });
    req.event(expectedResponse);

  });

  
});
