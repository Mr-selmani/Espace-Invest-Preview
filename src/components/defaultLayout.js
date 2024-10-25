export default function DefaultLayout({ children }) {
  return (
    <div className="relative">
      <img 
        src='/assets/images/logo.png' 
        width={80} height={80} 
        className='absolute top-5 left-5 mobile:h-10 mobile:w-10 object-contain' 
      />
      {children}
    </div>
  );
}
