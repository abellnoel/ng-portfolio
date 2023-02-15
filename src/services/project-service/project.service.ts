import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/interfaces/project';
import { LoremIpsum } from 'lorem-ipsum';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    getProjects(): Observable<Project[]> {
        const projects = [];

        for (let i = 1; i < 13; i++) {
            const mockProject = {
                title: `Project ${i}`,
                description: this.lorem.generateParagraphs(1),
                link: 'https://github.com/abellnoel',
            };
            projects.push(mockProject);
        }
        return of(projects);
    }
}
