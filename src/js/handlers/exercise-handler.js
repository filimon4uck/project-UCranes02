import { showSuccess } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';

async function handleExercise(e) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  const exerciseId = e.target.closest('[data-id]').dataset.id;
  const data = await exercisesApi.getExerciseById(exerciseId);
  console.log(data);
  showSuccess(exerciseId);
  const exerciseMarkup = exerciseDetailsMarkup(data);
  document
    .querySelector('footer')
    .insertAdjacentHTML('afterend', exerciseMarkup);
}
// console.log(exerciseDetailsMarkup());
// const exMarkup = exerciseDetailsMarkup({
//   bodyPart: 'waist',
//   equipment: 'body weight',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0002.gif',
//   name: '45° side bend',
//   target: 'abs',
//   description:
//     "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//   rating: 4.33,
//   burnedCalories: 323,
//   time: 3,
//   popularity: 754,
// });

// document.querySelector('footer').insertAdjacentHTML('afterend', exMarkup);

export default handleExercise;
