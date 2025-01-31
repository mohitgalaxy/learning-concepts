import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import employees from './data.json';

//component to render posts 
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  dataSource:any = employees;

  constructor(private router: Router) {
    //commnet here
   }

  ngOnInit(): void {
    employees.employees.map((a:any)=>{
      a.image= a.src.length>0? a.src : '../../../assets/images/user.jpeg';
    })
    this.dataSource = employees;
  }

  //redirect to edit post
  Edit(data: any){
    this.router.navigateByUrl('/posts/update/'+data.id)
  }
  
  //redirect to comments
  Comment(data:any){
    this.router.navigateByUrl('/comments/:'+data.id);
  }

  //redirect to add post
  Add(){
    this.router.navigateByUrl('posts/create');
  }
}
