import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 max-w-[1200px] mx-auto">
      <h2 className="font-medium text-2xl first-letter:font-semibold first-letter:text-3xl">
        <Link to="/">Formly</Link>
      </h2>

      <div className="flex items-center gap-5">
        <Link to="#">Pricing</Link>
        <Link to="#">Features</Link>
        <Link to="#">Carrers</Link>
        <button className="px-3 py-1 shadow-sm h-9 rounded-md border border-black/10 bg-background text-foreground">
          Log in
        </button>
        <button className="px-3 py-1 shadow-sm h-9 rounded-md bg-foreground text-background">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
