namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements(): string {
            return ("Here is the list of requirements for React")
        }
        getAvailableTeacher(teacher: Teacher = this.teacher): string {
            if (!teacher.experienceTeachingReact || teacher.experienceTeachingReact === 0) {
                return ('No available teacher');
            }
            return (`Available Teacher: ${teacher.firstName}`);
        }
    }
}
