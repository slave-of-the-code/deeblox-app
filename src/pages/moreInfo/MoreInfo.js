import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import './moreInfo.scss';

const MoreInfo = () => {
  const { t } = useTranslation();
  const t_paragraph = i18n.t('moreInfo.paragraph', { returnObjects: true });

  const options = document.querySelectorAll('#header > .header__navigation .navigation > li');
  options.forEach((option) => {
    const a = option.innerHTML;
    if (a !== '<a href="/">Home</a>') {
      option.setAttribute('style', 'display:none');
    }
  });

  // const [options, handleOptionChange] = useOptions();

  // useEffect(() => {
  //   for (const key in options) {
  //     if (options.hasOwnProperty(key)) {
  //       if (key === 'home') {
  //         options[key] = true;
  //       } else {
  //         options[key] = false;
  //       }
  //     }
  //   }

  //   handleOptionChange(options);
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [handleOptionChange, options]);

  console.log('more info');

  return (
    <section id="moreInfo">
      <div className="container">
        {t_paragraph.map((p, i) => {
          return <p key={i}>{t(p)}</p>;
        })}
      </div>
    </section>
  );
};

MoreInfo.propTypes = {};

export default MoreInfo;
