interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional dynamic properties like "contract"
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher( { firstName, lastName }: { firstName: string, lastName: string}): string { 
  firstName = firstName.charAt(0); 
  return `${firstName}. ${lastName}`; }


  // 1️⃣ Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2️⃣ Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3️⃣ Class implementing the interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}




