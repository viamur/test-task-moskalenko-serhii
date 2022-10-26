import daily1 from '../images/chair/daily/1.webp';
import daily2 from '../images/chair/daily/2.webp';
import daily3 from '../images/chair/daily/3.webp';
import daily4 from '../images/chair/daily/4.webp';

import ergonomic1 from '../images/chair/ergonomic/1.webp';
import ergonomic2 from '../images/chair/ergonomic/2.webp';
import ergonomic3 from '../images/chair/ergonomic/3.webp';

import task1 from '../images/chair/task/1.webp';
import task2 from '../images/chair/task/2.webp';
import task3 from '../images/chair/task/3.webp';
import task4 from '../images/chair/task/4.webp';

import varve1 from '../images/chair/varve/1.webp';
import varve2 from '../images/chair/varve/2.webp';
import varve3 from '../images/chair/varve/3.webp';
import varve4 from '../images/chair/varve/4.webp';

const chairList = [
  {
    title: 'Ergonomic Chair',
    img: [ergonomic1, ergonomic2, ergonomic3],
    benefits: ['Eight points of adjustment', 'Supports up to 300 pounds', 'Seven year warranty'],
    cost: 320,
  },
  {
    title: 'Daily Chair',
    img: [daily1, daily2, daily3, daily4],
    benefits: ['Four points of adjustment', 'Comfort and style for less', 'Five year warranty'],
    cost: 240,
  },
  {
    title: 'Verve Chair',
    img: [varve1, varve2, varve3, varve4],
    benefits: [
      'Six points of adjustment',
      'Peak performance and versatile design',
      'Seven year warranty',
    ],
    cost: 550,
  },
  {
    title: 'Task Chair',
    img: [task1, task2, task3, task4],
    benefits: ['Modern ergonomics', 'Fantastic lumbar and back support', 'Five year warranty'],
    cost: 270,
  },
];

export default chairList;
