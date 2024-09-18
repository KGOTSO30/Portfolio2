import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  projects: Project[] = [];
 
  
 // projectq: any ={} = this.projects;



  isCollapsed: boolean = true;

  filtering: boolean =false;

  typescript: boolean = false;

  angular: boolean = false;



  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Moshoeshoe Kgotso - Portfolio');
  }
  
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

   


  GetProjects(){

  }
  Filter(){
   
   
   let filterTags: Tag[] = [];
    
    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.typescript || this.angular){
      this.filtering = true;
    }else {
      this.filtering = false;
    }
   // let filteredProjects : Project [] = this.projectService.GetProjectsByFilter(filterTags);
   // filteredProjects = 
   // const filteredPs = this.projects.filter(x => filterTags.find(y => y.color === x.id))
   
  }

  ResetFilters(){
    this.angular = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
   // this.projects = this.projectService.GetProjectsByFilter();
  }
}
