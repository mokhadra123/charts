import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  cartsData: any[] = [
    {
      title: 'تقارير تتبع الوقت',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-time.svg',
    },
    {
      title: 'تقارير  الرواتب',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-salary.svg',
    },
    {
      title: 'تقارير  الحضور',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-attend.svg',
    },
    {
      title: 'تقارير الحوادث',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-accid.svg',
      routerLink: '/statistics',
    },
    {
      title: 'تقارير  الاجازات',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-holiday.svg',
    },
    {
      title: 'تقارير رصد حادث مروري',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/car-collision.svg',
    },
    {
      title: 'تقارير  الوقائع اليوميه',
      desc: 'هذ النص هو مثال لنص يمكن استبداله في نفس المساحه لقد تم توليد هذا النص من مولد النص العربي حيث يمكن ان يولد',
      img: '../../assets/images/re-daily.svg',
      routerLink: '/crimes',
    },
  ];
}
