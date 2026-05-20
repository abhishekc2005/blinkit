import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const cols = [
    {
      title: "Useful Links",
      items: ["About", "Careers", "Blog", "Press", "Lead", "Value", "Privacy", "Terms"],
    },
    {
      title: "Categories",
      items: [
        "Fruits & Vegetables",
        "Dairy & Bread",
        "Snacks",
        "Beverages",
        "Instant Food",
        "Personal Care",
        "Cleaning",
        "Pet Care",
      ],
    },
  ];

  return (
    <footer className="mt-16 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="text-2xl font-extrabold text-primary">blinkit</div>
          <p className="mt-3 text-sm text-muted-foreground">
            India's last minute app. Order groceries & essentials online and get delivered in 10
            minutes.
          </p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 text-sm font-bold text-foreground">{c.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">Download App</h4>
          <p className="text-sm text-muted-foreground">
            Get the Blinkit app for faster ordering & offers.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Blinkit Clone — Built for demo purposes.
      </div>
    </footer>
  );
}
