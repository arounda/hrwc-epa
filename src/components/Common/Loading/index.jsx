import s from './loading.module.scss';

const Loading = () => {
  return (
    <div className={s.loadingWrapper}>
      <span className={s.loader}></span>
    </div>
  )
};

export default Loading;
