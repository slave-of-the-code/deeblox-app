import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import './moreInfo.scss';

const MoreInfo = () => {
  const { t } = useTranslation();
  const t_paragraph = i18n.t('moreInfo.paragraph', { returnObjects: true });

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
