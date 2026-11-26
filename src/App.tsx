import { useState, type FormEvent, type ReactNode } from "react";

import heroImage from './assets/driveway-school-hero.png';


type IconName =
  | "home"
  | "calendar"
  | "route"
  | "book"
  | "wallet"
  | "message"
  | "bell"
  | "sun"
  | "moon"
  | "clock"
  | "pin"
  | "car"
  | "arrow"
  | "play"
  | "check"
  | "close";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const icons: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-7h6v7" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M6 17c0-5 12-3 12-10" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z" />
        <path d="M4 6.5v13A2.5 2.5 0 0 0 6.5 22H20M9 8h7" />
      </>
    ),
    wallet: (
      <>
        <path d="M3 6h16a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2z" />
        <path d="M3 7V5a2 2 0 0 1 2-2h13v4M16 12h5" />
      </>
    ),
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    car: (
      <>
        <path d="m5 16-1 2v2h3v-2h10v2h3v-2l-1-2-2-7H7z" />
        <path d="M5 14h14M7 16h.01M17 16h.01" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    play: <path d="m9 7 8 5-8 5z" />,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {icons[name]}
    </svg>
  );
}

function DriveWayMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="driveway-mark"
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        d="M5 7h12c10.8 0 18 6.7 18 17s-7.2 17-18 17H5V7Zm9 8v18h3c5.8 0 9-3.5 9-9s-3.2-9-9-9h-3Z"
        className="mark-d"
      />
      <path d="m20 15 5 21 6-13 6 13 6-21" className="mark-w" />
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Vue d’ensemble", icon: "home" },
  { label: "Planning", icon: "calendar" },
  { label: "Progression", icon: "route" },
  { label: "Code", icon: "book" },
  { label: "Paiements", icon: "wallet" },
  { label: "Messages", icon: "message" },
];

const instructorNav: { label: string; icon: IconName }[] = [
  { label: "Vue d’ensemble", icon: "home" },
  { label: "Mon agenda", icon: "calendar" },
  { label: "Mes élèves", icon: "book" },
  { label: "Examens", icon: "route" },
  { label: "Messages", icon: "message" },
];

const adminNav: { label: string; icon: IconName }[] = [
  { label: "Vue d’ensemble", icon: "home" },
  { label: "Élèves", icon: "book" },
  { label: "Paiements", icon: "wallet" },
  { label: "Véhicules", icon: "car" },
  { label: "Équipe", icon: "message" },
];

const sessions = [
  { date: "18", month: "JUN", time: "10:00", title: "Circulation urbaine", status: "Confirmée" },
  {
    date: "21",
    month: "JUN",
    time: "14:30",
    title: "Priorités & intersections",
    status: "Confirmée",
  },
  { date: "24", month: "JUN", time: "18:00", title: "Examen blanc — Code", status: "À préparer" },
];

function InstructorDashboard() {
  return (
    <div className="role-dashboard">
      <section className="role-kpis">
        {[
          ["Leçons aujourd’hui", "6", "2 terminées", "calendar"],
          ["Élèves suivis", "18", "4 prêts bientôt", "book"],
          ["Taux de réussite", "84%", "+6% ce trimestre", "route"],
          ["Liste d’attente", "3", "1 prioritaire", "clock"],
        ].map(([label, value, detail, icon]) => (
          <article className="glass-card role-kpi" key={label}>
            <span className="kpi-glyph">
              <Icon name={icon as IconName} size={18} />
            </span>
            <div>
              <small>{label}</small>
              <strong>{value}</strong>
              <span>{detail}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="role-main-grid">
        <article className="glass-card role-panel">
          <div className="role-panel-head">
            <div>
              <span className="overline muted">SUIVI PÉDAGOGIQUE</span>
              <h2>Mes élèves</h2>
            </div>
            <button>
              Voir tous <Icon name="arrow" size={14} />
            </button>
          </div>
          <div className="premium-table">
            <div className="premium-table-head">
              <span>ÉLÈVE</span>
              <span>PROGRESSION</span>
              <span>NOTE</span>
              <span>STATUT</span>
            </div>
            {[
              ["CL", "Clara Louis", 68, "8.5", "Bientôt prête"],
              ["NB", "Noah Bernard", 89, "9.2", "Prêt examen"],
              ["IM", "Inès Moreau", 51, "7.4", "En progression"],
              ["TH", "Tom Henry", 34, "6.8", "À accompagner"],
            ].map(([initials, name, progress, note, status]) => (
              <button className="premium-table-row" key={String(name)}>
                <span className="student-cell">
                  <i>{initials}</i>
                  <span>
                    <strong>{name}</strong>
                    <small>Permis B</small>
                  </span>
                </span>
                <span className="table-progress">
                  <i>
                    <b style={{ width: `${progress}%` }} />
                  </i>
                  <small>{progress}%</small>
                </span>
                <strong className="note-value">
                  {note}
                  <small>/10</small>
                </strong>
                <span className="status-pill">{status}</span>
              </button>
            ))}
          </div>
        </article>
        <article className="glass-card role-panel agenda-panel">
          <div className="role-panel-head">
            <div>
              <span className="overline muted">MARDI 17 JUIN</span>
              <h2>Mon agenda</h2>
            </div>
            <span className="count-pill">6 leçons</span>
          </div>
          {[
            ["09:00", "Noah Bernard", "Conduite autonome", "Terminé"],
            ["11:00", "Inès Moreau", "Manœuvres", "En cours"],
            ["14:30", "Clara Louis", "Circulation urbaine", "À venir"],
            ["16:00", "Tom Henry", "Évaluation initiale", "À venir"],
          ].map(([time, name, lesson, state], index) => (
            <div className="agenda-row" key={time}>
              <time>{time}</time>
              <i className={index === 1 ? "active" : ""} />
              <span>
                <strong>{name}</strong>
                <small>{lesson}</small>
              </span>
              <em>{state}</em>
            </div>
          ))}
        </article>
      </section>
      <section className="glass-card waiting-strip">
        <div>
          <span className="overline muted">PROCHAINE ÉTAPE</span>
          <h2>3 candidats attendent une date d’examen</h2>
          <p>Noah Bernard est prioritaire avec une note moyenne de 9,2/10.</p>
        </div>
        <div className="candidate-stack">
          <span>NB</span>
          <span>CL</span>
          <span>AM</span>
        </div>
        <button className="primary-action">
          Gérer la liste <Icon name="arrow" size={15} />
        </button>
      </section>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="role-dashboard">
      <section className="role-kpis">
        {[
          ["Élèves actifs", "126", "+8 ce mois", "book"],
          ["À encaisser", "2 480 €", "6 échéances", "wallet"],
          ["Véhicules disponibles", "7/9", "2 en maintenance", "car"],
          ["Inscriptions", "5", "À traiter", "route"],
        ].map(([label, value, detail, icon]) => (
          <article className="glass-card role-kpi" key={label}>
            <span className="kpi-glyph gold">
              <Icon name={icon as IconName} size={18} />
            </span>
            <div>
              <small>{label}</small>
              <strong>{value}</strong>
              <span>{detail}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="role-main-grid admin-layout">
        <article className="glass-card role-panel">
          <div className="role-panel-head">
            <div>
              <span className="overline muted">SUIVI FINANCIER</span>
              <h2>Paiements récents</h2>
            </div>
            <button>
              Voir tout <Icon name="arrow" size={14} />
            </button>
          </div>
          <div className="payment-list">
            {[
              ["Clara Louis", "Permis B · 30h", "240 €", "20 juin", "À venir"],
              ["Lucas Petit", "Permis B · 20h", "390 €", "12 juin", "En retard"],
              ["Inès Moreau", "Conduite accompagnée", "180 €", "08 juin", "Payé"],
              ["Tom Henry", "Permis B · 25h", "320 €", "02 juin", "En retard"],
            ].map(([name, offer, amount, date, status]) => (
              <div className="payment-row" key={name}>
                <span>
                  <strong>{name}</strong>
                  <small>{offer}</small>
                </span>
                <strong>{amount}</strong>
                <span>{date}</span>
                <em className={status === "En retard" ? "late" : status === "Payé" ? "paid" : ""}>
                  {status}
                </em>
              </div>
            ))}
          </div>
        </article>
        <article className="glass-card role-panel">
          <div className="role-panel-head">
            <div>
              <span className="overline muted">PARC AUTOMOBILE</span>
              <h2>Véhicules</h2>
            </div>
            <span className="count-pill">9 au total</span>
          </div>
          {[
            ["Peugeot e-208", "DW-218-EV", "Disponible"],
            ["Renault Clio V", "DW-524-BT", "En leçon"],
            ["Citroën C3", "DW-879-CA", "Maintenance"],
            ["Toyota Yaris", "DW-136-HY", "Disponible"],
          ].map(([vehicle, plate, status]) => (
            <div className="vehicle-row" key={plate}>
              <span>
                <Icon name="car" size={18} />
              </span>
              <div>
                <strong>{vehicle}</strong>
                <small>{plate}</small>
              </div>
              <em className={status === "Maintenance" ? "late" : ""}>{status}</em>
            </div>
          ))}
        </article>
      </section>
      <section className="glass-card admin-summary">
        <div>
          <span className="overline muted">PERFORMANCE MENSUELLE</span>
          <h2>Activité de l’agence</h2>
        </div>
        <div className="admin-chart">
          {[48, 62, 55, 78, 69, 88, 74, 92, 83, 96].map((value, index) => (
            <i key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
        <div className="summary-stat">
          <strong>+12%</strong>
          <span>de leçons réalisées</span>
        </div>
        <div className="summary-stat">
          <strong>94%</strong>
          <span>de satisfaction</span>
        </div>
      </section>
    </div>
  );
}

type SlotStatus = "available" | "mine" | "occupied";

function StudentPlanning() {
  const [selectedDay, setSelectedDay] = useState(18);
  const [slots, setSlots] = useState<
    Array<{ time: string; status: SlotStatus; instructor: string }>
  >([
    { time: "09:00", status: "occupied", instructor: "Réservé par un autre élève" },
    { time: "10:00", status: "mine", instructor: "Votre leçon avec Thomas" },
    { time: "11:30", status: "available", instructor: "Disponible avec Thomas" },
    { time: "14:00", status: "available", instructor: "Disponible avec Amélie" },
    { time: "15:30", status: "occupied", instructor: "Réservé par un autre élève" },
    { time: "17:00", status: "available", instructor: "Disponible avec Thomas" },
  ]);

  const availableDays = [3, 5, 6, 10, 12, 13, 17, 18, 19, 21, 24, 26, 27, 28];
  const myDays = [18, 21, 24];
  const occupiedDays = [4, 7, 11, 14, 20, 25];
  const monthDays = [
    { day: 26, outside: true },
    { day: 27, outside: true },
    { day: 28, outside: true },
    { day: 29, outside: true },
    { day: 30, outside: true },
    { day: 31, outside: true },
    ...Array.from({ length: 30 }, (_, index) => ({ day: index + 1, outside: false })),
    { day: 1, outside: true },
    { day: 2, outside: true },
    { day: 3, outside: true },
    { day: 4, outside: true },
    { day: 5, outside: true },
    { day: 6, outside: true },
  ];

  function updateSlot(index: number, status: SlotStatus) {
    setSlots((current) =>
      current.map((slot, slotIndex) =>
        slotIndex === index
          ? {
              ...slot,
              status,
              instructor: status === "mine" ? "Votre leçon avec Thomas" : "Disponible avec Thomas",
            }
          : slot,
      ),
    );
  }

  return (
    <div className="planning-page">
      <section className="planning-intro">
        <div>
          <span className="overline muted">MON PLANNING</span>
          <h2>Organisez vos prochaines leçons</h2>
          <p>Consultez les disponibilités de l’agence et gérez vos réservations.</p>
        </div>
        <button className="primary-action">
          <Icon name="calendar" size={16} /> Mes réservations
        </button>
      </section>

      <section className="planning-layout">
        <article className="glass-card calendar-card">
          <div className="calendar-toolbar">
            <button aria-label="Mois précédent">
              <Icon name="arrow" size={17} />
            </button>
            <div>
              <span>JUIN</span>
              <strong>2025</strong>
            </div>
            <button aria-label="Mois suivant">
              <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="calendar-legend">
            <span>
              <i className="available" /> Disponible
            </span>
            <span>
              <i className="mine" /> Ma réservation
            </span>
            <span>
              <i className="occupied" /> Occupé par un autre élève
            </span>
          </div>
          <div className="calendar-weekdays">
            {["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="calendar-grid">
            {monthDays.map((date, index) => {
              const status = date.outside
                ? ""
                : myDays.includes(date.day)
                  ? "mine"
                  : occupiedDays.includes(date.day)
                    ? "occupied"
                    : availableDays.includes(date.day)
                      ? "available"
                      : "";
              return (
                <button
                  className={`${date.outside ? "outside" : ""} ${selectedDay === date.day && !date.outside ? "selected" : ""}`}
                  disabled={date.outside}
                  key={`${date.outside ? "outside" : "june"}-${date.day}-${index}`}
                  onClick={() => setSelectedDay(date.day)}
                >
                  <span>{date.day}</span>
                  {status && <i className={status} />}
                </button>
              );
            })}
          </div>
        </article>

        <aside className="glass-card slots-panel">
          <div className="slots-heading">
            <div>
              <span className="overline muted">CRÉNEAUX DU JOUR</span>
              <h2>Mercredi {selectedDay} juin</h2>
            </div>
            <span className="availability-count">
              {slots.filter((slot) => slot.status === "available").length} disponibles
            </span>
          </div>
          <div className="day-summary">
            <span>
              <Icon name="clock" size={16} /> Leçons de 1 heure
            </span>
            <span>
              <Icon name="pin" size={16} /> Agence République
            </span>
          </div>
          <div className="slot-schedule">
            {slots.map((slot, index) => (
              <div className={`schedule-slot ${slot.status}`} key={slot.time}>
                <time>{slot.time}</time>
                <span className="schedule-track">
                  <i />
                </span>
                <div>
                  <strong>
                    {slot.status === "available"
                      ? "Créneau disponible"
                      : slot.status === "mine"
                        ? "Votre réservation"
                        : "Créneau indisponible"}
                  </strong>
                  <small>{slot.instructor}</small>
                </div>
                {slot.status === "available" ? (
                  <button onClick={() => updateSlot(index, "mine")}>Réserver</button>
                ) : slot.status === "mine" ? (
                  <button className="cancel-slot" onClick={() => updateSlot(index, "available")}>
                    Annuler
                  </button>
                ) : (
                  <span className="lock-label">Occupé</span>
                )}
              </div>
            ))}
          </div>
          <div className="planning-note">
            <Icon name="bell" size={16} />
            <p>Vous serez notifiée si un créneau occupé se libère.</p>
            <button>Activer l’alerte</button>
          </div>
        </aside>
      </section>
    </div>
  );
}

function StudentMessages() {
  const [notificationSent, setNotificationSent] = useState(false);

  return (
    <div className="messages-page">
      <section className="messages-intro">
        <div>
          <span className="overline muted">CENTRE DE MESSAGES</span>
          <h2>Restez informée, sans y penser</h2>
          <p>DriveWay vous prévient automatiquement avant chaque leçon réservée.</p>
        </div>
        <button className="primary-action" onClick={() => setNotificationSent(true)}>
          <Icon name="bell" size={16} /> Simuler le rappel
        </button>
      </section>

      <section className="messages-layout">
        <aside className="glass-card conversation-list">
          <div className="conversation-list-head">
            <h2>Messages</h2>
            <span>2 non lus</span>
          </div>
          <button className="conversation-item active">
            <span className="conversation-avatar brand-avatar">
              <Icon name="bell" size={17} />
            </span>
            <span>
              <strong>Rappels DriveWay</strong>
              <small>Votre leçon est prévue demain…</small>
            </span>
            <span>
              <time>10:00</time>
              <i />
            </span>
          </button>
          <button className="conversation-item">
            <span className="conversation-avatar">TM</span>
            <span>
              <strong>Thomas Martin</strong>
              <small>Très bien pour la séance de samedi.</small>
            </span>
            <span>
              <time>Hier</time>
            </span>
          </button>
          <button className="conversation-item">
            <span className="conversation-avatar">DW</span>
            <span>
              <strong>Agence République</strong>
              <small>Votre paiement a bien été reçu.</small>
            </span>
            <span>
              <time>Lun.</time>
            </span>
          </button>
        </aside>

        <article className="glass-card conversation-panel">
          <header className="conversation-header">
            <span className="conversation-avatar brand-avatar">
              <Icon name="bell" size={18} />
            </span>
            <div>
              <strong>Rappels DriveWay</strong>
              <small>
                <i /> Notifications automatiques
              </small>
            </div>
            <button aria-label="Options">•••</button>
          </header>
          <div className="message-thread">
            <div className="thread-date">
              <span>MARDI 17 JUIN</span>
            </div>
            <div className="system-event">
              <Icon name="clock" size={15} />
              <span>Rappel programmé automatiquement 24h avant la leçon</span>
            </div>
            <div
              className={`message-bubble reminder-message ${notificationSent ? "just-sent" : ""}`}
            >
              <div className="reminder-badge">
                <Icon name="bell" size={15} /> RAPPEL · J-1
              </div>
              <p>Bonjour Clara,</p>
              <p>
                Votre leçon de conduite est prévue <strong>demain, mercredi 18 juin à 10:00</strong>
                , avec Thomas Martin.
              </p>
              <div className="message-booking-card">
                <span className="message-date">
                  <strong>18</strong>
                  <small>JUIN</small>
                </span>
                <div>
                  <strong>Circulation urbaine</strong>
                  <span>
                    <Icon name="clock" size={13} /> 10:00 — 11:00
                  </span>
                  <span>
                    <Icon name="pin" size={13} /> Agence République
                  </span>
                </div>
              </div>
              <p className="reminder-footnote">
                Pensez à vous présenter 10 minutes avant le départ avec votre livret
                d’apprentissage.
              </p>
              <div className="message-actions">
                <button>Voir ma réservation</button>
                <button>Prévenir d’un retard</button>
              </div>
              <time>
                {notificationSent ? "À l’instant" : "Aujourd’hui · 10:00"}{" "}
                <Icon name="check" size={12} />
              </time>
            </div>
            {notificationSent && (
              <div className="delivery-event">
                <span>
                  <Icon name="check" size={13} />
                </span>
                Notification envoyée par e-mail et dans l’application
              </div>
            )}
          </div>
          <footer className="message-composer">
            <button aria-label="Ajouter une pièce jointe">+</button>
            <input aria-label="Votre message" placeholder="Écrire une réponse…" />
            <button className="send-button" aria-label="Envoyer">
              <Icon name="arrow" size={16} />
            </button>
          </footer>
        </article>

        <aside className="glass-card automation-panel">
          <span className="automation-icon">
            <Icon name="bell" size={21} />
          </span>
          <span className="overline muted">AUTOMATISATION ACTIVE</span>
          <h2>Rappel 24h avant</h2>
          <p>Ce rappel est envoyé à l’élève sur tous ses canaux actifs.</p>
          <div className="automation-timeline">
            <span className="done">
              <i>
                <Icon name="check" size={12} />
              </i>
              <span>
                <strong>Réservation confirmée</strong>
                <small>Samedi 14 juin · 16:32</small>
              </span>
            </span>
            <span className="current">
              <i>
                <Icon name="bell" size={12} />
              </i>
              <span>
                <strong>Rappel automatique</strong>
                <small>Mardi 17 juin · 10:00</small>
              </span>
            </span>
            <span>
              <i>
                <Icon name="calendar" size={12} />
              </i>
              <span>
                <strong>Leçon de conduite</strong>
                <small>Mercredi 18 juin · 10:00</small>
              </span>
            </span>
          </div>
          <div className="channels">
            <span>
              <Icon name="message" size={14} /> Application <i />
            </span>
            <span>
              <Icon name="message" size={14} /> E-mail <i />
            </span>
            <span>
              <Icon name="message" size={14} /> SMS <i className="off" />
            </span>
          </div>
        </aside>
      </section>

      {notificationSent && (
        <div className="notification-toast" role="status">
          <span>
            <Icon name="check" size={16} />
          </span>
          <div>
            <strong>Rappel envoyé</strong>
            <small>Clara a été notifiée pour sa leçon de demain.</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [role, setRole] = useState<"student" | "instructor" | "admin">("student");
  const [loginRole, setLoginRole] = useState<"instructor" | "admin" | null>(null);
  const [authenticatedRoles, setAuthenticatedRoles] = useState<Array<"instructor" | "admin">>([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [active, setActive] = useState("Vue d’ensemble");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState("Jeu. 26 juin · 10:30");
  const [confirmed, setConfirmed] = useState(false);

  function bookLesson() {
    setConfirmed(true);
    window.setTimeout(() => {
      setModalOpen(false);
      setConfirmed(false);
    }, 1100);
  }

  const currentNav =
    role === "student" ? navItems : role === "instructor" ? instructorNav : adminNav;
  const person =
    role === "student"
      ? { name: "Clara Louis", detail: "Élève · Permis B", initials: "CL" }
      : role === "instructor"
        ? { name: "Thomas Martin", detail: "Moniteur", initials: "TM" }
        : { name: "Sophie Dubois", detail: "Administratrice", initials: "SD" };

  function changeRole(nextRole: "student" | "instructor" | "admin") {
    setRole(nextRole);
    setActive("Vue d’ensemble");
  }

  function requestRole(nextRole: "student" | "instructor" | "admin") {
    if (nextRole === "student" || authenticatedRoles.includes(nextRole)) {
      changeRole(nextRole);
      return;
    }
    setLoginRole(nextRole);
    setLoginEmail("");
    setLoginPassword("");
    setLoginError("");
  }

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!loginEmail.includes("@") || loginPassword.length < 6) {
      setLoginError(
        "Saisissez une adresse e-mail valide et un mot de passe d’au moins 6 caractères.",
      );
      return;
    }
    if (loginRole) {
      setAuthenticatedRoles((current) =>
        current.includes(loginRole) ? current : [...current, loginRole],
      );
      changeRole(loginRole);
      setLoginRole(null);
    }
  }

  return (
    <div className="premium-app" data-theme={theme}>
      <aside className="premium-sidebar">
        <a className="premium-logo" href="#" aria-label="DriveWay, accueil">
          <DriveWayMark />
          <span>
            Drive<span>Way</span>
          </span>
        </a>

        <div className="role-selector" aria-label="Choisir un espace">
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => requestRole("student")}
          >
            Élève
          </button>
          <button
            className={role === "instructor" ? "active" : ""}
            onClick={() => requestRole("instructor")}
          >
            Moniteur
          </button>
          <button className={role === "admin" ? "active" : ""} onClick={() => requestRole("admin")}>
            Admin
          </button>
        </div>

        <nav className="premium-nav" aria-label="Navigation principale">
          {currentNav.map((item) => (
            <button
              className={active === item.label ? "active" : ""}
              key={item.label}
              onClick={() => setActive(item.label)}
              title={item.label}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.label === "Messages" && <b>2</b>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="theme-switch"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Activer le mode ${theme === "dark" ? "clair" : "sombre"}`}
          >
            <span className={theme === "dark" ? "active" : ""}>
              <Icon name="moon" size={15} />
            </span>
            <span className={theme === "light" ? "active" : ""}>
              <Icon name="sun" size={15} />
            </span>
          </button>
          <button className="profile-mini">
            <span className="avatar">{person.initials}</span>
            <span>
              <strong>{person.name}</strong>
              <small>{person.detail}</small>
            </span>
            <Icon name="arrow" size={15} />
          </button>
        </div>
      </aside>

      <main className="premium-main">
        <header className="premium-header">
          <div>
            <p>
              {role === "student"
                ? "ESPACE ÉLÈVE"
                : role === "instructor"
                  ? "ESPACE MONITEUR"
                  : "ESPACE ADMIN"}{" "}
              · MARDI 17 JUIN
            </p>
            <h1>
              Bonjour, {role === "student" ? "Clara" : role === "instructor" ? "Thomas" : "Sophie"}.
            </h1>
          </div>
          <div className="header-actions">
            <button
              className="mobile-theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Changer de thème"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
            </button>
            <button className="notification-button" aria-label="Notifications">
              <Icon name="bell" size={19} />
              <i />
            </button>
            <label className="header-role-select">
              <span className="sr-only">Changer d’espace</span>
              <select
                value={role}
                onChange={(event) => requestRole(event.target.value as typeof role)}
              >
                <option value="student">Élève</option>
                <option value="instructor">Moniteur</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            {role === "student" && (
              <button className="primary-action" onClick={() => setModalOpen(true)}>
                Réserver une leçon <Icon name="arrow" size={17} />
              </button>
            )}
          </div>
        </header>

        {role === "student" ? (
          <>
            {active === "Planning" ? (
              <StudentPlanning />
            ) : active === "Messages" ? (
              <StudentMessages />
            ) : (
              <>
                <section className="premium-hero">
                  <img src={heroImage} alt="Véhicule école DriveWay sur une route urbaine au crépuscule" />
                  <div className="hero-vignette" />
                  <div className="hero-content">
                    <span className="overline">
                      <i /> PROCHAINE LEÇON
                    </span>
                    <h2>
                      Maîtrisez la ville.
                      <br />
                      Prenez confiance.
                    </h2>
                    <p>Demain, vous travaillez l’anticipation et les insertions avec Thomas.</p>
                    <div className="hero-meta">
                      <span>
                        <Icon name="calendar" size={17} />
                        <span>
                          <small>DATE</small>
                          <strong>18 juin</strong>
                        </span>
                      </span>
                      <span>
                        <Icon name="clock" size={17} />
                        <span>
                          <small>HORAIRE</small>
                          <strong>10:00 — 11:00</strong>
                        </span>
                      </span>
                      <span>
                        <Icon name="pin" size={17} />
                        <span>
                          <small>DÉPART</small>
                          <strong>République</strong>
                        </span>
                      </span>
                    </div>
                  </div>
                  <button className="hero-detail">
                    Voir le détail <Icon name="arrow" size={16} />
                  </button>
                </section>

                <section className="metric-grid" aria-label="Indicateurs de progression">
                  <article className="glass-card metric-card">
                    <div className="metric-head">
                      <span>Progression globale</span>
                      <small>+8% ce mois</small>
                    </div>
                    <div className="metric-content">
                      <div
                        className="progress-ring"
                        style={{ "--value": "68" } as React.CSSProperties}
                      >
                        <span>
                          68<small>%</small>
                        </span>
                      </div>
                      <div>
                        <strong>En bonne voie</strong>
                        <p>Votre rythme est régulier. Plus que 6 heures avant le bilan.</p>
                      </div>
                    </div>
                  </article>

                  <article className="glass-card metric-card">
                    <div className="metric-head">
                      <span>Heures de conduite</span>
                      <small>Objectif 30h</small>
                    </div>
                    <strong className="metric-number">
                      24<span>h</span>
                    </strong>
                    <div className="linear-progress">
                      <span style={{ width: "80%" }} />
                    </div>
                    <div className="scale">
                      <span>0h</span>
                      <span>6h restantes</span>
                      <span>30h</span>
                    </div>
                  </article>

                  <article className="glass-card metric-card code-metric">
                    <div className="metric-head">
                      <span>Code de la route</span>
                      <small>7 derniers jours</small>
                    </div>
                    <div className="code-score">
                      <strong>
                        36<span>/40</span>
                      </strong>
                      <span>Meilleur score</span>
                    </div>
                    <div
                      className="spark-bars"
                      aria-label="Scores récents : 29, 32, 31, 35, 34 et 36 sur 40"
                    >
                      {[29, 32, 31, 35, 34, 36].map((score, index) => (
                        <i
                          key={index}
                          style={{ height: `${(score / 40) * 100}%` }}
                          className={index === 5 ? "current" : ""}
                        />
                      ))}
                    </div>
                  </article>
                </section>

                <section className="content-grid">
                  <article className="glass-card sessions-card">
                    <div className="card-heading">
                      <div>
                        <span className="overline muted">VOTRE AGENDA</span>
                        <h2>Prochaines séances</h2>
                      </div>
                      <button onClick={() => setActive("Planning")}>
                        Tout afficher <Icon name="arrow" size={15} />
                      </button>
                    </div>
                    <div className="session-list">
                      {sessions.map((session, index) => (
                        <button className="session-item" key={session.date}>
                          <span className="session-date">
                            <strong>{session.date}</strong>
                            <small>{session.month}</small>
                          </span>
                          <span className="session-line">
                            <i className={index === 2 ? "gold" : ""} />
                          </span>
                          <span className="session-copy">
                            <small>
                              {session.time} · {session.status}
                            </small>
                            <strong>{session.title}</strong>
                          </span>
                          <span className="session-arrow">
                            <Icon name="arrow" size={17} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </article>

                  <article className="experience-card">
                    <div className="traffic-light-scene" aria-hidden="true">
                      <span className="traffic-glow" />
                      <div className="traffic-light">
                        <i className="red" />
                        <i className="amber" />
                        <i className="green" />
                      </div>
                      <span className="traffic-pole" />
                    </div>
                    <div>
                      <span className="overline">PRÉPAREZ VOTRE LEÇON</span>
                      <h2>Les bons réflexes avant de démarrer.</h2>
                      <button>
                        <span>
                          <Icon name="play" size={15} />
                        </span>{" "}
                        Voir le module · 4 min
                      </button>
                    </div>
                  </article>
                </section>
              </>
            )}
          </>
        ) : role === "instructor" ? (
          <InstructorDashboard />
        ) : (
          <AdminDashboard />
        )}
      </main>

      <nav className="premium-mobile-nav" aria-label="Navigation mobile">
        {currentNav.slice(0, 4).map((item) => (
          <button
            className={active === item.label ? "active" : ""}
            key={item.label}
            onClick={() => setActive(item.label)}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label.replace("Vue d’ensemble", "Accueil")}</span>
          </button>
        ))}
      </nav>

      {modalOpen && role === "student" && (
        <div
          className="premium-modal-backdrop"
          role="presentation"
          onMouseDown={() => setModalOpen(false)}
        >
          <div
            className="premium-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" aria-label="Fermer" onClick={() => setModalOpen(false)}>
              <Icon name="close" />
            </button>
            <span className="modal-icon">
              <Icon name="calendar" />
            </span>
            <span className="overline">RÉSERVATION</span>
            <h2 id="booking-title">Choisissez votre créneau</h2>
            <p>Disponibilités avec Thomas Martin.</p>
            <div className="premium-slots">
              {["Jeu. 26 juin · 10:30", "Ven. 27 juin · 15:00", "Sam. 28 juin · 09:00"].map(
                (slot) => (
                  <button
                    className={selected === slot ? "selected" : ""}
                    key={slot}
                    onClick={() => setSelected(slot)}
                  >
                    <span className="slot-check">
                      {selected === slot && <Icon name="check" size={14} />}
                    </span>
                    <span>
                      <strong>{slot.split(" · ")[0]}</strong>
                      <small>{slot.split(" · ")[1]} · 1 heure</small>
                    </span>
                    <Icon name="car" size={18} />
                  </button>
                ),
              )}
            </div>
            <button className="primary-action modal-submit" onClick={bookLesson}>
              {confirmed ? (
                <>
                  <Icon name="check" /> Créneau réservé
                </>
              ) : (
                <>
                  Confirmer la réservation <Icon name="arrow" size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {loginRole && (
        <div
          className="premium-modal-backdrop"
          role="presentation"
          onMouseDown={() => setLoginRole(null)}
        >
          <div
            className="auth-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" aria-label="Fermer" onClick={() => setLoginRole(null)}>
              <Icon name="close" />
            </button>
            <div className="auth-brand">
              <DriveWayMark size={36} />
              <span>
                Drive<span>Way</span>
              </span>
            </div>
            <span className="auth-role">
              {loginRole === "admin" ? "ESPACE ADMINISTRATION" : "ESPACE MONITEUR"}
            </span>
            <h2 id="login-title">Connexion sécurisée</h2>
            <p>
              Identifiez-vous pour accéder aux données{" "}
              {loginRole === "admin" ? "de l’agence" : "de vos élèves"}.
            </p>
            <form onSubmit={submitLogin} noValidate>
              <label>
                Adresse e-mail
                <span className="auth-input">
                  <Icon name="message" size={17} />
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder={
                      loginRole === "admin" ? "admin@driveway.fr" : "moniteur@driveway.fr"
                    }
                    value={loginEmail}
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                      setLoginError("");
                    }}
                  />
                </span>
              </label>
              <label>
                Mot de passe
                <span className="auth-input">
                  <Icon name="route" size={17} />
                  <input
                    type="password"
                    autoComplete="current-password"
                    placeholder="Veuillez entrer votre mot de passe"
                    value={loginPassword}
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                      setLoginError("");
                    }}
                  />
                </span>
              </label>
              <div className="auth-options">
                <label>
                  <input type="checkbox" /> Se souvenir de moi
                </label>
                <button type="button">Mot de passe oublié ?</button>
              </div>
              {loginError && (
                <p className="auth-error" role="alert">
                  {loginError}
                </p>
              )}
              <button className="primary-action auth-submit" type="submit">
                Se connecter <Icon name="arrow" size={16} />
              </button>
            </form>
            <div className="auth-demo">
              <Icon name="check" size={14} />
              <span>Démo : utilisez un e-mail valide et 6 caractères minimum.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
