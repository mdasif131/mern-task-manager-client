import '@/assets/css/progress.css';
const FullScreenLoader = () => {
  return (
    <>
      <div className="lodingOverlay hidden!">
        <div className="lineProgress">
          <div className="ineterminate"></div>
        </div>
      </div>
    </>
  );
};

export default FullScreenLoader;
