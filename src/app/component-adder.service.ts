import { Injectable, ViewContainerRef, ComponentFactory } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  //factory: ComponentFactory;

  constructor(private resolver: ComponentFactoryResolver) { }

  //Reference of Parent Component Placeholder
  setViewRef(parentViewRef) {
    this.viewRef = parentViewRef;
  }

  addComponent(compToAdd: any): any {
    //Entry component will have the factory registered in resolver
    const factory = this.resolver.resolveComponentFactory(compToAdd);

    //Access the parent view Injector to Inject the componet
    const compRef =  factory.create(this.viewRef.parentInjector);

    //Insert the child view into the parent view
    this.viewRef.insert(compRef.hostView);

    return compRef;
  }

  removeComponent() {
    this.viewRef.detach();
  }
}
