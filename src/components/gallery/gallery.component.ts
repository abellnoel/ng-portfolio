import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from 'src/services/project-service/project.service';
import { Project } from 'src/interfaces/project';

//TODOIDEA: add card section for technology stack
@Component({
    selector: 'abn-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
    @Input() itemsPerRow = 3;

    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.getProjects();
    }

    get rowColsClass() {
        return `row-cols-${this.itemsPerRow}`;
    }

    getProjects() {
        return this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
        });
    }
}
