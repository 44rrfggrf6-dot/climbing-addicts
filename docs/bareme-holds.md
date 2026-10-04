# Barème des holds — référence site ↔ app

> Source : section « Points & holds » du site (commit `a45aba6`, 2026-10-04).
> But : aligner `climb-addicts-app` (`src/lib/gamification.ts`, `docs/gamification-charte.md`)
> sur ce que le site annonce. Le site fait foi pour les valeurs ci-dessous.

## 0. Philosophie (règles de design)

1. **On fait équipe, on ne s'affronte pas.** Aucun classement sur la cotation brute ; chacun peut finir premier quelque part ; personne n'est affiché dernier.
2. **La persévérance avant tout.** Un projet bouclé après plusieurs essais vaut ~2× un flash à son niveau.
3. **Revenir, c'est la vraie performance.** Deux courtes séances > une longue. Le retour après une pause est le plus gros bonus de séance.
4. **On ne se compare qu'à soi.** Ce qui compte, c'est l'écart à sa propre médiane : au-dessus paie plus, en dessous un peu moins.
5. **Rien ne se perd.** Pas de points négatifs au total, pas de reset. Une semaine de repos par mois ne casse pas une série.
6. **On célèbre chaque palier** (séries, altitude, objectifs de crew), et les paliers rapportent des holds.
7. **L'altitude dépend d'abord de soi.** La crew colore une semaine (plafond), elle ne grimpe pas à ta place.

## 1. Par voie

`holds = max(5, base + niveau + essais + projet_bouclé + effort)`

| Composante | Règle | Holds |
| --- | --- | --- |
| Base | Flash 25 · Réussie 20 · Projet (non réussi) 10 | 10–25 |
| Au-dessus du niveau | +15 par cotation au-dessus de la médiane perso (par discipline), plafonné à +30 | 0 → +30 |
| En dessous du niveau | −5 par cotation en dessous, plancher −10 | −10 → 0 |
| Essais | +4 par essai supplémentaire (`attempts − 1`), plafonné à +20 | 0 → +20 |
| Projet bouclé | voie loggée `project` lors d'une **séance précédente**, puis réussie (vérifié par l'historique, pas par les essais déclarés) | +20 |
| Effort ressenti | note 1–5 → `(effort − 1) × 2` | 0 → +8 |
| Plancher | une voie rapporte toujours au moins | 5 |

### Exemples (effort 3 → +4)

| Cas | Calcul | Holds |
| --- | --- | --- |
| Flash à son niveau | 25 + 4 | 29 |
| Flash 2 cotations sous son niveau | 25 − 10 + 4 | 19 |
| Voie +1 réussie en 3 essais | 20 + 15 + 8 + 4 | 47 |
| Projet bouclé à son niveau, 4 essais | 20 + 12 + 20 + 4 | 56 |

## 2. Anti-farming

- Même voie, même semaine (lundi–dimanche) : plein tarif 2 fois, puis **5 holds** (jamais plus que la valeur initiale).
- **10** premières voies d'une séance seulement rapportent des holds (était 12). Les suivantes : 0.
- Badges et stats comptent tout ; seule la monnaie est plafonnée.
- Contrôle : 2 séances de 5 voies (~360) > 1 séance de 15 voies (~325).

## 3. Par séance (semaine lundi–dimanche)

| Rang de la séance dans la semaine | Holds |
| --- | --- |
| 1re | 25 |
| 2e | 35 |
| 3e | 45 |
| 4e et suivantes | 15 (« le repos compte aussi ») |

Bonus cumulables :

| Bonus | Condition | Holds |
| --- | --- | --- |
| Bon retour | 1re séance après ≥ 3 semaines sans grimper | +50 |
| Avec la crew | séance taguée crew | +15 |
| Nouveau lieu | 1re séance dans un lieu jamais loggé | +15 |
| Vrai rocher | séance en extérieur | +20 |

## 4. Paliers

| Palier | Règle | Holds |
| --- | --- | --- |
| Série | semaines consécutives avec ≥ 1 séance ; paliers 3 · 8 · 16 · 26 · 52 semaines ; 10 holds × nb de semaines | +30 · +80 · +160 · +260 · +520 |
| Joker repos | 1 semaine sans séance par période de 4 semaines ne casse pas la série (elle gèle, ne compte pas) | — |
| Paliers rejouables | une nouvelle série repaye ses paliers ; le meilleur run reste affiché comme « record » | — |
| Série double | ≥ 2 séances/sem. : **badge seulement, pas de holds** (déjà payé par la 2e séance) | 0 |
| Nouvelle altitude | 100 × numéro du palier atteint | +100 → +500 |

## 5. Altitude (seuils inchangés)

| Palier | Seuil | Altitude | Bonus d'arrivée |
| --- | --- | --- | --- |
| Snowdrop / Perce-neige | 0 | 600 m | — |
| Crocus | 1 500 | 1 200 m | +100 |
| Harebell / Campanule | 5 000 | 1 800 m | +200 |
| Gentian / Gentiane | 12 000 | 2 400 m | +300 |
| Rhododendron | 25 000 | 3 000 m | +400 |
| Edelweiss | 50 000 | 3 600 m | +500 |

Repère : ~600 holds/semaine à 2 séances → Crocus < 1 mois, Edelweiss ~1,5 an.

## 6. Crew

Gains versés à **chaque membre ayant grimpé** sur la période. Tout ce qui vient de la crew (objectifs, défis, boards, shout-outs, spots) est **plafonné à 150 holds / semaine / membre**, hors rejoindre/créer.

### 6.1 Rejoindre et créer (une fois par crew, 3 crews max)

| Action | Condition | Holds |
| --- | --- | --- |
| Rejoindre | à la 1re séance taguée avec la crew | +50 |
| Créer | versé quand 3 membres y ont grimpé | +75 |
| Accueillir | par nouveau membre qui fait sa 1re séance avec la crew, max 5 / mois | +20 |

### 6.2 Objectifs de la semaine

| Objectif | Condition | Holds |
| --- | --- | --- |
| Objectif de séances | séances cumulées ≥ `max(3, ceil(membres × 1,5))` | +50 |
| Toute la crew | chaque membre a grimpé ≥ 1 fois | +25 |
| Séance commune | ≥ 3 membres, même jour, même lieu ; 1×/sem. | +20 |
| Boards (6) | 1er 20 · 2e 15 · 3e 10 · sur le board 5 (par board) | 5–20 |
| Shout-outs | non exclusifs | +10 chacun |

### 6.3 Défi du mois (la crew en choisit 1 parmi 4)

| Défi | Condition | Holds |
| --- | --- | --- |
| Sortie rocher | 1 séance outdoor à ≥ 3 membres | +60 |
| Projets d'équipe | `membres × 2` projets bouclés dans le mois | +60 |
| Personne derrière | chaque membre grimpe ≥ 2 semaines du mois | +60 |
| Nouveau spot | séance commune dans un lieu inédit pour la crew | +40 |

### 6.4 Spots légendaires

Avancent d'un cran par objectif de séances hebdo atteint (seuils inchangés : 0 / 3 / 8 / 15 / 25 / 40 / 60 / 90) : Fontainebleau → Céüse → Verdon → Kalymnos → Magic Wood → Yosemite → Rocklands → Cerro Torre. Nouveau spot atteint : **+50 par membre actif**.

## 7. Boards hebdo

- Le board **Progression** compte les holds de voies + séances de la semaine, **hors** bonus de paliers (séries, altitude) et hors gains de crew.
- Égalités : rang partagé, pas de départage (inchangé).

## 8. Écarts avec le code actuel (`src/lib/gamification.ts`)

| Élément | Code actuel | Cible |
| --- | --- | --- |
| Base voie | 30 / 25 / 15 | 25 / 20 / 10 |
| Au-dessus du niveau | +25/cotation, max +50 | +15/cotation, max +30 |
| En dessous du niveau | rien | −5/cotation, plancher −10, total ≥ 5 |
| Effort | `effort × 3` (3–15) | `(effort − 1) × 2` (0–8) |
| Essais | +2/essai, max +10 | +4/essai, max +20 |
| Projet bouclé | badge seulement | +20 holds |
| `MAX_SCORING_CLIMBS_PER_SESSION` | 12 | 10 |
| Séances | Showed up 25 + Twice this week 20 (2e seulement) | 25 / 35 / 45 / 15 selon le rang |
| Séries | badge Metronome sans holds | holds aux paliers + joker repos |
| Altitude | pas de bonus | +100 × palier |
| `REWARD_GRID` | 40 / 30 / 25 / 15, crew goal 100, shout-out 20 | 20 / 15 / 10 / 5, crew goal 50, shout-out 10 |
| Plafond crew | aucun | 150 / semaine |
| Rejoindre / créer / accueillir | rien | +50 / +75 / +20 |
| Toute la crew, séance commune | rien | +25 / +20 |
| Défi du mois | rien | 4 défis, +40 à +60 |
| Spots | progression sans holds | +50 par nouveau spot |

À prévoir côté app :
- `hold_points` est stocké à l'écriture : recalculer à la lecture (comme le taper actuel) ou migrer les valeurs existantes.
- Porter les plafonds en SQL dans `league_week_ingredients` avant de brancher les boards dessus.
- Mettre à jour `CLIMB_HOLD_RULES`, `SESSION_BONUSES`, `REWARD_GRID`, les tests `gamification.test.ts` et `docs/gamification-charte.md`.
