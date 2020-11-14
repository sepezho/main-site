import React from 'react';

import s from './Style/Text.module.sass';

function Text() {
  return (
    <div className={s.TextContainer}>
      <p>Привет, я Влад. Сейчас я кратко расскажу о себе.</p>

      В планах уехать учиться за границу, в <span className={s.coursive}>Чехию</span>. Сейчас я работаю <span className={s.coursive}>фронтендером</span> на удаленке, коплю деньги на дальнейшее обучение. Постоянно думаю
      о грамотном вложении средств. Занимаюсь <span className={s.coursive}>реселлом</span> техники, это дело приносит небольшой доход, и большой опыт. Есть у меня и <span className={s.coursive}>хобби</span>. В
      частности, я увлекаюсь <span className={s.coursive}>фотографией</span> <span className={s.secondaryText}>(и немного видео, есть мертвый канал на ютубе)</span>, <span className={s.coursive}>программированием</span> <span className={s.secondaryText}>(этот сайт и уйму других проектов я
      написал сам)</span> и <span className={s.coursive}>хардвером</span> <span className={s.secondaryText}>(создал матрицу 8*8, сейчас почти закончил лазерный ЧПУ)</span>. Иногда могу сорваться и соло
      уехать в другой город на день, просто погулять и открыть новые территории для себя. Путешествия меня вдохновляют. В общем, стараюсь проводить
      дни продуктивно, и уходить от рутины. Придерживаюсь принципов <span className={s.coursive}>минимализма</span> во всем. Ах да, чуть не забыл. Мне 17 лет, и я школьник 11-го класса.
      Сейчас активно веду <span className={s.coursive}>телеграмм канал</span> и <span className={s.coursive}>инсту</span>. Но и остальные ссылки (сбоку) можешь посмотреть.
      <p>Удачи тебе :)</p>
    </div>
  );
}

export default Text;
