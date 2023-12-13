import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-delete-abonnement',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.scss']
})
export class DeleteAbonnementComponent {
  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.stockService.deleteEmprunt(id).subscribe(
        () => {
          alert('Emprunt deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
        }
      );
    }
  }
}
