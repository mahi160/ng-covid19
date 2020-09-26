import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(time: string): string {
    {
      const date = new Date(Date.parse(time));
      const a = new Date().getTime();
      const b = date.getTime();
      const diffMin = Math.floor((a - b) / 60000);
      const diffHr = Math.floor(diffMin / 60);
      const diffDay = Math.floor(diffHr / 24);
      const diffMonth = Math.floor(diffDay / 30);
      const diffYear = Math.floor(diffMonth / 12);
      return (
        (diffMin < 0 && 'In the future!') ||
        (diffMin < 1 && 'just now') ||
        (diffMin < 60 && `${diffMin} min ago`) ||
        (diffHr < 24 && `${diffHr} hr ${diffMin - diffHr * 60} min ago`) ||
        (diffDay < 31 && `${diffDay} days ${diffHr - diffDay * 24} hr ago`) ||
        (diffMonth < 12 &&
          `${diffMonth} months ${diffDay - diffMonth * 30} days ago`) ||
        (diffYear < 10 &&
          `${diffYear} years ${diffMonth - diffYear * 12} months ago`) ||
        (diffYear >= 10 && 'A Long Time Ago!')
      );
    }
  }
}
