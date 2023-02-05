namespace Subjects {
    export interface Teacher{
        experienceTeachingC?: number,
    }
    export class Cpp extends Subject {
        getRequirements(): string {
            return ("Here is the list of requirements for Cpp");
        }
        getAvailableTeacher(teacher: Teacher = this.teacher): string {
            if (!teacher.experienceTeachingC || teacher.experienceTeachingC === 0) {
                return ('No available teacher')
            }
            return (`Available Teacher: ${teacher.firstName}`)
        }
    }
}
