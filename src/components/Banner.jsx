const Banner = () => {
  return (
    <div className="text-center max-w-[1200px] px-2 mx-auto h-100 flex justify-center flex-col gap-5 items-center">
      <h1 className="font-semibold text-3xl md:text-5xl">
        <span>Simple form builder</span> <br />
        <span className="text-muted">Create share and analyze forms</span>
      </h1>
      <button className="px-3 py-1 shadow-sm h-9 rounded-md border border-black/10 bg-background text-foreground">Get started</button>
    </div>
  );
};

export default Banner;
