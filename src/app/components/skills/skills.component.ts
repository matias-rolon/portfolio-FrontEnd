import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills:Skills[]=[];
  public editSkill:Skills | undefined;
  public deleteSkill:Skills | undefined;

  constructor(private skillService:SkillsService) { }

  ngOnInit(): void {
    this.getSkill();
  }

  public getSkill():void{
    this.skillService.getSkill().subscribe({
      next:(Response: Skills[]) =>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, skill?:Skills):void{
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addSkillModal');
    }
    else if(mode === 'delete'){
      this.deleteSkill=skill;
      button.setAttribute('data-target', '#deleteSkillModal');
    }
    else if(mode === 'edit'){
      this.editSkill=skill;
      button.setAttribute('data-target', '#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddSkill(addForm:NgForm){
    document.getElementById('add-skill-form')?.click();
    this.skillService.addSkill(addForm.value).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.getSkill();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateSkill(skill:Skills){
    this.editSkill=skill;
    document.getElementById('update-skill-form')?.click();
    this.skillService.updateSkill(skill).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.getSkill();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteSkill(idEdu:number):void{

    this.skillService.deleteSkill(idEdu).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getSkill();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
