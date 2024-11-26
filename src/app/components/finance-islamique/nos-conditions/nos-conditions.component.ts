import { Component } from '@angular/core';
interface Row {
  id?: number;
  isOpen?: boolean;
  natureOperations?: string;
  commissions?: string;
  dateValeur?: string;

}
@Component({
  selector: 'app-nos-conditions',
  templateUrl: './nos-conditions.component.html',
  styleUrls: ['./nos-conditions.component.css']
})
export class NosConditionsComponent {
  rows: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows1: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows2: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows3: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows4: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows5: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows6: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows7: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows8: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows9: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows10: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows11: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows12: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows13: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows14: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows15: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows16: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows17: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows18: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows19: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows20: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows21: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows22: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows23: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows24: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows25: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows26: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows27: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows28: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows29: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows30: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows31: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows32: Row[] = [
    {
      id: 1,
      isOpen: false,
    }
  ];
  rows33: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows34: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows35: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  toggleRow(index: number) {
    this.rows[index].isOpen = !this.rows[index].isOpen; // Toggle the clicked row
  }
  toggleRow1(index: number) {
    this.rows1[index].isOpen = !this.rows1[index].isOpen; // Toggle the clicked row
  }
  toggleRow2(index: number) {
    this.rows2[index].isOpen = !this.rows2[index].isOpen; // Toggle the clicked row
  }
  toggleRow3(index: number) {
    this.rows3[index].isOpen = !this.rows3[index].isOpen; // Toggle the clicked row
  }
  toggleRow4(index: number) {
    this.rows4[index].isOpen = !this.rows4[index].isOpen; // Toggle the clicked row
  }
  toggleRow5(index: number) {
    this.rows5[index].isOpen = !this.rows5[index].isOpen; // Toggle the clicked row
  }
  toggleRow6(index: number) {
    this.rows6[index].isOpen = !this.rows6[index].isOpen; // Toggle the clicked row
  }
  toggleRow7(index: number) {
    this.rows7[index].isOpen = !this.rows7[index].isOpen; // Toggle the clicked row
  }
  toggleRow8(index: number) {
    this.rows8[index].isOpen = !this.rows8[index].isOpen; // Toggle the clicked row
  }
  toggleRow9(index: number) {
    this.rows9[index].isOpen = !this.rows9[index].isOpen; // Toggle the clicked row
  }
  toggleRow10(index: number) {
    this.rows10[index].isOpen = !this.rows10[index].isOpen; // Toggle the clicked row
  }
  toggleRow11(index: number) {
    this.rows11[index].isOpen = !this.rows11[index].isOpen; // Toggle the clicked row
  }
  toggleRow12(index: number) {
    this.rows12[index].isOpen = !this.rows12[index].isOpen; // Toggle the clicked row
  }
  toggleRow13(index: number) {
    this.rows13[index].isOpen = !this.rows13[index].isOpen; // Toggle the clicked row
  }
  toggleRow14(index: number) {
    this.rows14[index].isOpen = !this.rows14[index].isOpen; // Toggle the clicked row
  }
  toggleRow15(index: number) {
    this.rows15[index].isOpen = !this.rows15[index].isOpen; // Toggle the clicked row
  }
  toggleRow16(index: number) {
    this.rows16[index].isOpen = !this.rows16[index].isOpen; // Toggle the clicked row
  }
  toggleRow17(index: number) {
    this.rows17[index].isOpen = !this.rows17[index].isOpen; // Toggle the clicked row
  }
  toggleRow18(index: number) {
    this.rows18[index].isOpen = !this.rows18[index].isOpen; // Toggle the clicked row
  }
  toggleRow19(index: number) {
    this.rows19[index].isOpen = !this.rows19[index].isOpen; // Toggle the clicked row
  }
  toggleRow20(index: number) {
    this.rows20[index].isOpen = !this.rows20[index].isOpen; // Toggle the clicked row
  }
  toggleRow21(index: number) {
    this.rows21[index].isOpen = !this.rows21[index].isOpen; // Toggle the clicked row
  }
  toggleRow22(index: number) {
    this.rows22[index].isOpen = !this.rows22[index].isOpen; // Toggle the clicked row
  }
  toggleRow23(index: number) {
    this.rows23[index].isOpen = !this.rows23[index].isOpen; // Toggle the clicked row
  }
  toggleRow24(index: number) {
    this.rows24[index].isOpen = !this.rows24[index].isOpen; // Toggle the clicked row
  }
  toggleRow25(index: number) {
    this.rows25[index].isOpen = !this.rows25[index].isOpen; // Toggle the clicked row
  }
  toggleRow26(index: number) {
    this.rows26[index].isOpen = !this.rows26[index].isOpen; // Toggle the clicked row
  }
  toggleRow27(index: number) {
    this.rows27[index].isOpen = !this.rows27[index].isOpen; // Toggle the clicked row
  }
  toggleRow28(index: number) {
    this.rows28[index].isOpen = !this.rows28[index].isOpen; // Toggle the clicked row
  }
  toggleRow29(index: number) {
    this.rows29[index].isOpen = !this.rows29[index].isOpen; // Toggle the clicked row
  }
  toggleRow30(index: number) {
    this.rows30[index].isOpen = !this.rows30[index].isOpen; // Toggle the clicked row
  }
  toggleRow31(index: number) {
    this.rows31[index].isOpen = !this.rows31[index].isOpen; // Toggle the clicked row
  }
  toggleRow32(index: number) {
    this.rows32[index].isOpen = !this.rows32[index].isOpen; // Toggle the clicked row
  }
  toggleRow33(index: number) {
    this.rows33[index].isOpen = !this.rows33[index].isOpen; // Toggle the clicked row
  }
  toggleRow34(index: number) {
    this.rows34[index].isOpen = !this.rows34[index].isOpen; // Toggle the clicked row
  }
  toggleRow35(index: number) {
    this.rows35[index].isOpen = !this.rows35[index].isOpen; // Toggle the clicked row
  }
}
