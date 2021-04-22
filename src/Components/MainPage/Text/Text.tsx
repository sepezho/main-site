import React from 'react';

import s from './Style/Text.module.sass';

function Text() {
  return (
    <div className={s.TextContainer}>
      <p>Привет, я Влад. Давай я кратко расскажу о себе.</p>
      В планах уехать учиться за границу, в <span className={s.coursive}>Чехию</span>.
      Сейчас я работаю <span className={s.coursive}>фронтендером</span> в одном
      быстрорастущем <a href={'https://pumpy.farm'}>стартапе</a>.
      На первых этапах развития стартапа я был единственным фронтендером.
      Весь сайт приходилось вести самому. Стоял у истоков, так сказать.
      Имею достаточный доход, который инвестирую в криптовалюту.
      Коплю деньги на дальнейшее обучение. Есть у меня и <span className={s.coursive}>хобби</span>.
      В частности, я увлекаюсь <span className={s.coursive}>фотографией</span> <span className={s.secondaryText}>(смотри в инст)</span>
      , <span className={s.coursive}>программированием
      </span> <span className={s.secondaryText}>(этот сайт и уйму других проектов я написал сам)
      </span>, <span className={s.coursive}>хардвером</span> <span className={s.secondaryText}>
      (создал пиксельную матрицу 8*8, лазерный ЧПУ на arduino)</span> и <span className={s.coursive}>немного пишу
      </span> <span className={s.secondaryText}>(рассуждения на разные темы ты можешь найти в моем телеграме)</span>.
      Иногда могу сорваться и один уехать в другой город,
      просто погулять и открыть новые территории для себя. Путешествия меня вдохновляют.
      В общем, стараюсь проводить дни продуктивно, уходить от рутины.
      Придерживаюсь принципов <span className={s.coursive}>минимализма</span> во всем.
      Ах да, чуть не забыл. Мне 17 лет, я школьник 11-го класса.
      Сейчас активно веду <a href={'https://t.me/sepezho_log'}>телеграм</a> канал
      и <a href={'https://www.instagram.com/sepezho'}>инсту</a>. Но и остальные ссылки <span className={s.secondaryText}>(сбоку)</span> можешь посмотреть.
      <p>Удачи тебе :)</p>
    </div>
  );
}

export default Text;
