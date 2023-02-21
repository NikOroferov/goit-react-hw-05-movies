import css from './ReviewerCard.module.css';

export default function ReviewerCard({ review, author, created }) {
  const createdDay = created.slice(8, 10);
  const createdMonth = created.slice(5, 7);
  const createdYear = created.slice(0, 4);
  const createdDate = `${createdDay}.${createdMonth}.${createdYear}`;

  return (
    <li className={css.review__item}>
      <div className={css.review__item__content}>
        <div className={css['review__item__content--sign']}>
          <h4 className={css['review__item--title']}>{author}</h4>
          <time className={css['review__item--created']}>
            {createdDate}
          </time>
        </div>
        <p>{review}</p>
      </div>
    </li>
  );
}
