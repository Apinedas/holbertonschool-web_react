namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        getRequirements(): string {
            return ("Here is the list of requirements for Java")
        }
        getAvailableTeacher(teacher: Teacher = this.teacher): string {
            if (!teacher.experienceTeachingJava || teacher.experienceTeachingJava === 0) {
                return ('No available teacher');
            }
            return (`Available Teacher: ${teacher.firstName}`);
        }
    }
}
