import { Component, OnInit, WritableSignal, signal } from "@angular/core";
import { NgFor, NgIf } from "@angular/common"; // Import NgFor and NgIf
import { ExternalSystem } from "../external-system";
import { ExternalSystemService } from "../external-system.service";

@Component({
  selector: "app-external-service-list",
  standalone: true,
  imports: [NgFor, NgIf], // Ensure NgFor and NgIf are in the imports array
  templateUrl: "./external-service-list.component.html",
  // template: ` `,
  styles: [],
})
export class ExternalServiceListComponent implements OnInit {
  externalSystems$: WritableSignal<ExternalSystem[]> = signal([]);

  constructor(private externalSystemsService: ExternalSystemService) {}

  ngOnInit() {
    this.fetchExternalSystems();
  }

  addExternalSystem() {
    // Set default values
    const defaultData: ExternalSystem = {
      name: "New",
      baseUrl: "",
      authMethod: "apiKey",
      key: "",
      value: "",
      authPlace: "header",
    };

    this.externalSystemsService.createExternalSystem(defaultData).subscribe({
      next: () => {
        this.fetchExternalSystems;
      },
    });
  }

  // editExternalSystem(externalSystem: ExternalSystem) {
  //   this.externalSystemsService
  //     .updateExternalSystem(this.externalSystem()._id || "", externalSystem)
  //     .subscribe({
  //       next: () => this.fetchExternalSystems,
  //     });
  // }

  // deleteExternalSystem(id: ExternalSystem) {
  //   this.externalSystemsService.deleteExternalSystem(id).subscribe({
  //     next: () => {
  //       // Update the list of external systems after deletion
  //       this.fetchExternalSystems();
  //       console.log(id);
  //     },
  //     error: (err) => {
  //       console.error(`Error deleting external system: ${err.message}`);
  //     },
  //   });
  // }

  private fetchExternalSystems(): void {
    this.externalSystemsService
      .getExternalSystems()
      .subscribe((data: ExternalSystem[]) => {
        this.externalSystems$.set(data);
      });
  }
}
