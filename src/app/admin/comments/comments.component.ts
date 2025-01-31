import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../posts/data.json';

//component to render comments 
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor( 
    private router: Router,
    private route: ActivatedRoute
  ) {
    //comment here
   }

  routeSub: any;
  empId: any;
  data: any;
  comments: any;
  noData: boolean = false;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['postId'].substring(1)) 
    });
    this.data = employees.employees.filter(a=>a.id == this.empId)[0];
    this.comments = this.data.comments;
    
    //If no comment then show message
    if(this.comments.length==0){
      this.noData = true;
    }
  }
  
  //edit comment
  Edit(data: any){
    this.router.navigateByUrl('comments/update/:'+this.empId+'/:'+data.comId)
  }
  
  //add comment
  Add(){
    this.router.navigateByUrl('comments/:'+this.empId+'/create')
  }

  //redirect to post
  Post(){
    this.router.navigateByUrl('posts');
  }
}
