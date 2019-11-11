import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected the department with id = {{ deptId }}
    </p>
    <router-outlet></router-outlet>
    <div>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </div>
    <div>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </div>
    <div>
      <button (click)="gotoDepartment(deptId)">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public deptId;
  public selectedId;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id=parseInt(this.route.snapshot.paramMap.get('id')); - snapShot have some disadvantages. In order to overcome that we have to use paramMap.
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.deptId= id;
    });
  }

  goPrevious(){
    let previousId = this.deptId -1;
    //this.router.navigate(['/departments',previousId]);
      this.router.navigate(['../'+previousId],{relativeTo:this.route});
  }
  goNext(){
    let nextId = this.deptId +1;
    //this.router.navigate(['/departments',nextId]);
    this.router.navigate(['../'+nextId],{relativeTo:this.route});
  }
  gotoDepartment(Id){
    this.selectedId = Id;
    //this.router.navigate(['/departments',{id: this.selectedId,test:"testval"}]);

    this.router.navigate(['../',{id: this.selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
