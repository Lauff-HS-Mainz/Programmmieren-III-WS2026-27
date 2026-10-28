export default function Page() {
	return (
		<main
			style={{
				minHeight: "100vh",
				background: "#f7f4ed",
				color: "#24352b",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "24px 8%",
					borderBottom: "1px solid #ded9cc",
				}}
			>
				<strong style={{ fontSize: "1.35rem" }}>ReparaturWerk</strong>
				<a href="#kontakt" style={{ color: "#24352b", textDecoration: "none" }}>
					Kontakt
				</a>
			</nav>

			<section
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
					gap: "48px",
					alignItems: "center",
					maxWidth: 1100,
					margin: "0 auto",
					padding: "80px 8%",
				}}
			>
				<div>
					<p style={{ color: "#c35d37", fontWeight: 700, letterSpacing: 1 }}>
						REPAIR CAFÉ · GEMEINSAM NACHHALTIG
					</p>
					<h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05, margin: "16px 0" }}>
						Kaputt ist nicht gleich vorbei.
					</h1>
					<p style={{ fontSize: "1.15rem", lineHeight: 1.7, maxWidth: 540 }}>
						Wir reparieren gemeinsam Alltagsgegenstände, teilen Wissen und geben Dingen eine zweite Chance.
					</p>
					<a
						href="#termin"
						style={{
							display: "inline-block",
							marginTop: 20,
							padding: "14px 22px",
							borderRadius: 999,
							background: "#c35d37",
							color: "white",
							textDecoration: "none",
							fontWeight: 700,
						}}
					>
						Nächsten Termin ansehen →
					</a>
				</div>

				<div
					style={{
						padding: 32,
						borderRadius: 24,
						background: "#d8e4d4",
						boxShadow: "12px 12px 0 #b6caae",
					}}
				>
					<div style={{ fontSize: "5rem", textAlign: "center" }}>🔧</div>
					<h2 style={{ marginBottom: 8 }}>Was können wir reparieren?</h2>
					<p style={{ lineHeight: 1.6 }}>Elektronik · Fahrräder · Kleidung · Möbel · Haushaltsgeräte</p>
				</div>
			</section>

			<section id="termin" style={{ background: "#24352b", color: "white", padding: "48px 8%" }}>
				<div style={{ maxWidth: 1100, margin: "0 auto" }}>
					<p style={{ color: "#f2bd74", fontWeight: 700 }}>DER NÄCHSTE TERMIN</p>
					<h2 style={{ fontSize: "2rem", margin: "8px 0" }}>Samstag, 14. März · 10:00–14:00 Uhr</h2>
					<p style={{ marginBottom: 0 }}>Kulturzentrum am Park · Eintritt frei · Keine Anmeldung nötig</p>
				</div>
			</section>

			<footer id="kontakt" style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 8%", fontSize: ".9rem" }}>
				Fragen? Schreib uns an hallo@reparaturwerk.de
			</footer>
		</main>
	);
}
