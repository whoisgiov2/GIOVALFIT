/* ════════════════════════════════════════════════════
       FRASES MOTIVACIONALES
    ════════════════════════════════════════════════════ */
const MOTIVATIONAL_QUOTES = [
    "Hoy es tu día para brillar, Valeria. ✨", "Cada repetición te acerca a tu mejor versión. 💪", "Tu disciplina es tu mayor superpoder. 🌸",
    "Hazlo por ti y para ti. 💖", "El sudor de hoy es la fuerza de mañana. 🔥", "No te rindas, los resultados toman tiempo. ⏳",
    "Eres más fuerte de lo que crees. 👑", "Convierte el esfuerzo en orgullo. 🌟", "Tu cuerpo es tu templo, cuídalo entrenando. 🤍",
    "Un día a la vez, una serie a la vez. 🎯", "La constancia siempre le gana a la intensidad. 📈", "Tú eres tu única competencia. 🪞",
    "Demuéstrate de qué estás hecha hoy. 💥", "El éxito se construye fuera de tu zona de confort. 🚀", "Hoy no hay excusas, solo progreso. 💯",
    "Respira profundo y levanta ese peso. 🌬️", "La motivación te hace empezar, el hábito te mantiene. 🔁", "Eres pura magia en movimiento. ✨",
    "Siente el músculo trabajar, conecta tu mente. 🧠", "Pequeños progresos diarios suman grandes resultados. 📊",
    "Valeria, naciste para superar tus límites. 💫", "El dolor de hoy será tu poder mañana. 🦋", "Cree en ti misma y serás imparable. 🧗‍♀️",
    "No busques perfección, busca evolución. 🌺", "Disfruta el proceso, tu cuerpo es asombroso. 🌻", "Transforma el cansancio en determinación. ⚡",
    "Eres arquitecta de tu propia fuerza. 🏛️", "Dedícate esta hora a ti misma, te la mereces. 🎀", "Cada entrenamiento es una victoria. 🏅",
    "Tu energía de hoy define tus logros de mañana. 🔋", "No importa si vas lento, lo importante es no parar. 🐢", "Fuerte, hermosa e imparable. 💅",
    "Haz que hoy cuente, Valeria. 🗓️", "El peso se siente ligero cuando la mente está fuerte. 💭", "Agradece a tu cuerpo por lo que puede hacer. 🙏",
    "Celebra cada pequeño logro en el gimnasio. 🎉", "Levántate, brilla y entrena. 🌅", "Tus excusas no queman calorías. 🔥",
    "Estás esculpiendo tu mejor versión. 🪨", "Haz el trabajo, confía en el proceso. 🛠️", "El único mal entrenamiento es el que no se hace. 👟",
    "Siente el orgullo después de la última serie. 😌", "La fuerza también es femenina. 👸", "Visualiza tu meta y ve por ella. 🔭",
    "Hoy estás un paso más cerca de tu objetivo. 📍", "Mantén la cabeza alta y la postura firme. 🧍‍♀️", "Tu cuerpo escucha todo lo que tu mente dice. 🧘‍♀️",
    "Rompe tus propios récords hoy. 🏆", "Eres la protagonista de tu propio progreso. 🎬", "Construye tu fuerza desde adentro hacia afuera. 🏗️",
    "Valeria, este momento es tuyo. Úsalo bien. ⌚", "Un cuerpo fuerte construye una mente fuerte. 🛡️", "El esfuerzo que pones hoy es la recompensa de mañana. 🎁",
    "Entrena porque amas a tu cuerpo. ❤️", "Que tu determinación sea más fuerte que tu cansancio. 🌪️", "Desafíate a ti misma un poco más hoy. 🧩",
    "No te detengas cuando estés cansada, detente cuando termines. 🏁", "Deja que el progreso sea tu mayor motivación. 📈", "Brilla con luz propia en cada serie. 💫",
    "Recuerda por qué empezaste. ¡Vamos, Valeria! 🚀", "No te compares con nadie, solo compárate con la Valeria de ayer. 🎯", "Cada repetición te acerca más a tu meta. 🎯",
];
function setRandomQuote() {
    const el = document.getElementById('motivational-quote');
    el.style.opacity = 0;
    setTimeout(() => { el.innerText = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]; el.style.opacity = 1; }, 200);
}

/* ════════════════════════════════════════════════════
   DEFAULT ROUTINE
════════════════════════════════════════════════════ */
const DEFAULT_ROUTINE = {
    1: {
        label: 'Push · Superior',
        icon: 'zap',
        exercises: [
            {
                name: 'Press Inclinado Máquina', sets: 3, reps: '6-8',
                tip: 'Codos a 45°.',
                details: '🎯 <b>Foco:</b> Pectoral Superior.<br><b>Coach:</b> Mantén las escápulas retraídas contra el banco. No bloquees los codos arriba para mantener tensión constante. Imagina que quieres "estirar" el pecho al bajar (3s) y "explotar" al subir.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-plate-loaded-incline-chest-press-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Smithmachine-incline-bench-press-side.mp4'
            },
            {
                name: 'Press Militar DB', sets: 2, reps: '6-8',
                tip: 'Core firme.',
                details: '🎯 <b>Foco:</b> Deltoides Anterior.<br><b>Coach:</b> Mantén los codos ligeramente adelantados (plano escapular) para no estresar el manguito rotador. Evita arquear la espalda baja; aprieta el abdomen como si fueras a recibir un golpe.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-overhead-press-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-overhead-press-side.mp4'
            },
            {
                name: 'Elevaciones Laterales', sets: 3, reps: '12-15',
                tip: 'Controla la bajada.',
                details: '🎯 <b>Foco:</b> Deltoides Lateral.<br><b>Coach:</b> Lanza las mancuernas hacia las paredes, no hacia el techo. Imagina que tus manos son ganchos; no aprietes demasiado fuerte para no usar el antebrazo. El meñique debe liderar ligeramente la subida.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-lateral-raise-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-lateral-raise-front.mp4'
            },
            {
                name: 'Jalón al Pecho', sets: 2, reps: '8-10',
                tip: 'Jala hacia las caderas.',
                details: '🎯 <b>Foco:</b> Dorsal Ancho.<br><b>Coach:</b> No jales con las manos, imagina que tus codos quieren tocar tus bolsillos traseros. Saca el pecho al bajar la barra y evita el balanceo excesivo del torso.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-machine-pulldown-front.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-assisted-pull-up-side.mp4'
            },
            {
                name: 'Remo con Apoyo', sets: 2, reps: '8-10',
                tip: 'Pecho pegado al banco.',
                details: '🎯 <b>Foco:</b> Espalda media y Trapecio.<br><b>Coach:</b> Estira los brazos completamente abajo para sentir el estiramiento del dorsal. Al subir, aprieta las escápulas como si quisieras atrapar una moneda entre ellas. Cero impulso.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-machine-seated-cable-row-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-neutral-pulldown-side.mp4'
            },
            {
                name: 'Pullover en Polea', sets: 2, reps: '12-15',
                tip: 'Siente el estiramiento.',
                details: '🎯 <b>Foco:</b> Dorsal (aislamiento).<br><b>Coach:</b> Mantén una ligera flexión de codo constante. La clave es el estiramiento arriba; aguanta 1s ahí. Baja la barra hasta tus muslos apretando fuerte los laterales de tu espalda.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-pullover-front.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-rope-pullover-side.mp4'
            }
        ]
    },
    2: {
        label: 'Lower A · Glúteo',
        icon: 'target',
        exercises: [
            {
                name: 'Sentadilla Búlgara', sets: 3, reps: '8-10',
                tip: 'Peso en el talón.',
                details: '🎯 <b>Foco:</b> Glúteo Mayor.<br><b>Coach:</b> Inclina el torso hacia adelante para estirar más las fibras del glúteo. Imagina que el pie de atrás es solo un apoyo; el 90% del esfuerzo viene de la pierna de enfrente. Baja profundo.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-bulgarian-split-squat-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Smithmachine-split-squat-side.mp4'
            },
            {
                name: 'Peso Muerto Rumano', sets: 3, reps: '6-8',
                tip: 'Cadera atrás.',
                details: '🎯 <b>Foco:</b> Isquiotibiales y Glúteo.<br><b>Coach:</b> La barra debe "pintar" tus piernas, no se aleje de ellas. Baja solo hasta donde tu cadera deje de ir hacia atrás. Mantén la espalda neutra y siente el estiramiento brutal en la parte trasera.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-romanian-deadlift-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-romanian-deadlift-side.mp4'
            },
            {
                name: 'Patada de Glúteo', sets: 3, reps: '10-12',
                tip: 'Aprieta el glúteo arriba.',
                details: '🎯 <b>Foco:</b> Glúteo Mayor.<br><b>Coach:</b> Realiza una ligera rotación externa del pie (apuntando hacia afuera). Patea hacia atrás y un poco hacia afuera. Mantén el abdomen apretado para no arquear la zona lumbar.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-glute-kickback-side.mp4'
            },
            {
                name: 'Curl Isquios Sentada', sets: 3, reps: '10-12',
                tip: 'Bajada en 3s.',
                details: '🎯 <b>Foco:</b> Isquiotibiales.<br><b>Coach:</b> Mantén los pies apuntando hacia arriba (flexión dorsal). Sujeta fuerte las agarraderas para clavar la cadera al asiento. El regreso a la posición inicial debe ser muy lento.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-seated-hamstring-curl-front.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-machine-hamstring-curl-front.mp4'
            },
            {
                name: 'Extensión Cuádriceps', sets: 2, reps: '12-15',
                tip: 'Punta arriba.',
                details: '🎯 <b>Foco:</b> Cuádriceps.<br><b>Coach:</b> Pausa 1-2 segundos en la máxima contracción (arriba). Imagina que quieres "patear" el techo. No dejes que las pesas choquen al bajar para mantener la tensión mecánica.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-machine-leg-extension-side.mp4'
            },
            {
                name: 'Silla Romana', sets: 3, reps: '10-12',
                tip: 'Espalda redondeada.',
                details: '🎯 <b>Foco:</b> Glúteo e Isquios.<br><b>Coach:</b> Para quitarle trabajo a la espalda baja, redondea ligeramente la parte alta y mantén el mentón pegado al pecho. Sube usando solo tus glúteos hasta estar alineada, no hiperextiendas.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-45-degree-back-extension-side.mp4'
            }
        ]
    },
    3: {
        label: 'Lower B · Pierna',
        icon: 'flame',

        exercises: [
            {
                name: 'Prensa Pies Altos', sets: 3, reps: '8-10',
                tip: 'Glúteo stretch.',
                details: '🎯 <b>Foco:</b> Glúteo y Cadena Posterior.<br><b>Coach:</b> Al poner los pies arriba, involucras más el glúteo. Baja la plataforma todo lo que puedas sin que tu cadera se despegue del respaldo. Empuja siempre con los talones.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-leg-press-front.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-pendulum-squat-side.mp4'
            },
            {
                name: 'Sentadilla Talones', sets: 3, reps: '8-10',
                tip: 'Torso erguido.',
                details: '🎯 <b>Foco:</b> Cuádriceps.<br><b>Coach:</b> Eleva los talones con un disco o cuña. Esto permite que tus rodillas viajen más hacia adelante (seguro) y el torso se mantenga vertical, castigando directamente el cuádriceps.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-squat-front.mp4'
            },
            {
                name: 'Máquina Aductores', sets: 3, reps: '12-15',
                tip: 'Controlado.',
                details: '🎯 <b>Foco:</b> Aductores (pierna interna).<br><b>Coach:</b> Abre hasta sentir un estiramiento cómodo pero intenso. Cierra con potencia y aguanta el apretón 1 segundo. Es el músculo que da la forma estética a la pierna.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/male-Machine-machine-hip-adduction-front.mp4'
            },
            {
                name: 'Curl Isquios Sentada', sets: 2, reps: '10-12',
                tip: 'Retorno lento.',
                details: '🎯 <b>Foco:</b> Isquiotibiales.<br><b>Coach:</b> Concéntrate en la fase excéntrica (cuando las piernas suben). Cuenta "1, 2, 3" antes de volver a bajar. La conexión mente-músculo aquí es vital.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-seated-hamstring-curl-front.mp4'
            },
            {
                name: 'Extensión Cuádriceps', sets: 2, reps: '12-15',
                tip: 'Rango completo.',
                details: '🎯 <b>Foco:</b> Cuádriceps.<br><b>Coach:</b> No uses impulso. Asegúrate de que el rodillo esté justo arriba de tus tobillos. Quema final: busca el fallo muscular seguro.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-machine-leg-extension-side.mp4'
            }
        ]
    },
    4: {
        label: 'Pull · Brazos',
        icon: 'dumbbell',
        exercises: [
            {
                name: 'Press Militar DB', sets: 3, reps: '8-10',
                tip: 'Control de bajada.',
                details: '🎯 <b>Foco:</b> Deltoides Anterior.<br><b>Coach:</b> Baja las mancuernas hasta que estén a la altura de tus orejas. No choques las pesas arriba; detente un poco antes para mantener la tensión en el hombro.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-overhead-press-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-overhead-press-side.mp4'
            },
            {
                name: 'Curl Martillo', sets: 3, reps: '10-12',
                tip: 'Hombro quieto.',
                details: '🎯 <b>Foco:</b> Braquial y Antebrazo.<br><b>Coach:</b> Agarre neutro (palmas enfrentadas). Imagina que tus codos están atornillados a tus costillas. Este ejercicio da grosor al brazo visto de lado.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-hammer-curl-front.mp4'
            },
            {
                name: 'Curl Banco Inclinado', sets: 3, reps: '10-12',
                tip: 'Estiramiento máximo.',
                details: '🎯 <b>Foco:</b> Cabeza larga del Bíceps.<br><b>Coach:</b> Al estar inclinada, el bíceps empieza desde un estiramiento extremo. No muevas los hombros; solo mueve el antebrazo. Es brutal para el "pico" del bíceps.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-incline-curl-side.mp4'
            },
            {
                name: 'Tríceps Polea', sets: 3, reps: '12-15',
                tip: 'Separa manos.',
                details: '🎯 <b>Foco:</b> Tríceps (cabeza lateral).<br><b>Coach:</b> Usa una cuerda. Al llegar abajo, intenta separar las manos hacia afuera. Mantén los hombros bajos, lejos de las orejas.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-bar-pushdown-front.mp4'
            },
            {
                name: 'Vuelos Posteriores', sets: 3, reps: '12-15',
                tip: 'Codos atrás.',
                details: '🎯 <b>Foco:</b> Deltoides Posterior.<br><b>Coach:</b> Imagina que quieres "empujar" algo hacia atrás con tus codos. No aprietes las escápulas (no es un remo), el movimiento debe ser puramente del hombro.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-machine-pec-fly-front.mp4'
            },
            {
                name: 'Elevaciones Laterales', sets: 3, reps: '15-20',
                tip: 'Rango de hipertrofia.',
                details: '🎯 <b>Foco:</b> Hombro lateral.<br><b>Coach:</b> Repeticiones altas para bombear sangre. Controla el peso; si tienes que columpiarte, el peso es muy alto.',
                gif: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-lateral-raise-side.mp4',
                gifVar: 'https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-lateral-raise-front.mp4'
            }
        ]
    }
};

/* ════════════════════════════════════════════════════
   CONSTANTS & GLOBAL STATE
════════════════════════════════════════════════════ */
const ROUTINE_KEY = 'giovafit_routine_v1';
const SESSION_KEY = 'giovafit_pro_v1';
const HISTORY_KEY = 'giovafit_history_v1';
const XP_KEY = 'giovafit_xp_v1';
const PR_KEY = 'giovafit_pr_v1';
const UNIT_KEY = 'giovafit_unit_v1';
const ACH_KEY = 'giovafit_achievements_v1';

let achState = {
    unlocked: [],
    stats: { prs: 0, workouts: 0, chest: 0, gluteLegs: 0, arms: 0, back: 0, level: 1, streak: 0 }
};

const MEDALS_DB = [
    // --- CONSTANCIA Y ENTRENAMIENTOS ---
    { id: 'workout_1',  icon: 'zap',         title: 'El Primer Paso',      desc: 'Completaste tu primer entrenamiento...', req: { type: 'workouts', count: 1  } },
    { id: 'workout_4',  icon: 'calendar',    title: 'Semana Perfecta',     desc: 'Completaste 4 sesiones...',             req: { type: 'workouts', count: 4  } },
    { id: 'workout_10', icon: 'bar-chart-2', title: 'Racha de Élite',      desc: '10 entrenamientos...',                  req: { type: 'workouts', count: 10 } },
    { id: 'workout_20', icon: 'send',        title: 'Fuerza Imparable',    desc: '20 entrenamientos...',                  req: { type: 'workouts', count: 20 } },
    { id: 'workout_30', icon: 'star',        title: 'Viajera Cósmica',      desc: '30 entrenamientos...',                  req: { type: 'workouts', count: 30 } },

    // --- LOGROS POR RACHA (CONSTANCIA) ---
    { id: 'streak_3',  icon: 'flame',  title: 'Hábito en Marcha', desc: 'Mantuviste una racha de 3 días...', req: { type: 'streak', count: 3  } },
    { id: 'streak_7',  icon: 'sun',    title: 'Semana de Fuego',  desc: '7 días seguidos entrenando...',       req: { type: 'streak', count: 7  } },
    { id: 'streak_15', icon: 'sunrise',title: 'Sol Invencible',   desc: '15 días de racha...',                req: { type: 'streak', count: 15 } },

    // --- FUERZA Y RÉCORDS (PRs) ---
    { id: 'pr_5',  icon: 'dumbbell',       title: 'Fuerza Despierta',    desc: 'Rompiste 5 Récords Personales...', req: { type: 'prs', count: 5  } },
    { id: 'pr_10', icon: 'shield',         title: 'Maestra del Hierro',  desc: '10 Récords Personales...',          req: { type: 'prs', count: 10 } },
    { id: 'pr_20', icon: 'award',          title: 'Leyenda del Gimnasio',desc: '20 Récords Personales...',          req: { type: 'prs', count: 20 } },
]

function saveAchievements() { localStorage.setItem(ACH_KEY, JSON.stringify(achState)); }
let ROUTINE = {};
let currentDay = 1;
let sessionState = {};
let historyState = [];
let xpState = { xp: 0, level: 1, streak: 0, lastDate: null };
let prState = {};
let currentCalcKey = null;
let currentRepsKey = null;
let activeCalcTab = 'barra';
let globalUnit = localStorage.getItem(UNIT_KEY) || 'kg';

let timerId = null, timeLeft = 150, timerDuration = 150, isRunning = false;
const TIMER_CIRCUMFERENCE = 213.6;

function saveRoutine() { localStorage.setItem(ROUTINE_KEY, JSON.stringify(ROUTINE)); }
function saveXP() { localStorage.setItem(XP_KEY, JSON.stringify(xpState)); }
function persistSession() { localStorage.setItem(SESSION_KEY, JSON.stringify(sessionState)); }

function persistInput(k, field, rawValue) {
    if (!sessionState[k]) sessionState[k] = { done: false, w: '', r: '' };

    if (field === 'w') {
        const num = parseFloat(rawValue);
        if (rawValue === '' || rawValue === null || rawValue === undefined) {
            sessionState[k].w = '';
        } else if (isNaN(num) || num < 0) {
            showToast('⚠️ Peso inválido');
            return;
        } else {
            sessionState[k].w = num;
        }
    } else if (field === 'r') {
        const trimmed = String(rawValue).trim();
        if (trimmed !== '' && !/^\d+(-\d+)?$/.test(trimmed)) {
            showToast('⚠️ Reps inválidas (ej: 10 ó 8-12)');
            return;
        }
        sessionState[k].r = trimmed;
    } else {
        sessionState[k][field] = rawValue;
    }

    persistSession();
    checkActiveSession();
}

function updateInput(k, f, v) {
    if (!sessionState[k]) sessionState[k] = { done: false, w: '', r: '' };
    sessionState[k][f] = v;

    // ─── LÓGICA DE AUTO-CASCADA (Solo para el Peso 'w') ───
    if (f === 'w' && v !== '') {
        // k tiene el formato "dia_ejercicio_serie" (ej. "1_0_1")
        const parts = k.split('_');
        const d = parts[0];
        const exI = parts[1];
        const currentSet = parseInt(parts[2]);
        const totalSets = ROUTINE[d].exercises[exI].sets;

        // Revisamos las series que están por debajo de la actual
        for (let nextSet = currentSet + 1; nextSet <= totalSets; nextSet++) {
            const nextKey = `${d}_${exI}_${nextSet}`;
            if (!sessionState[nextKey]) sessionState[nextKey] = { done: false, w: '', r: '' };

            // Solo le pasamos el peso si la serie de abajo está vacía
            if (sessionState[nextKey].w === '' || sessionState[nextKey].w === undefined) {
                sessionState[nextKey].w = v; // Guardamos en la memoria

                // Actualizamos visualmente el texto en la pantalla
                const row = document.getElementById(`row-${nextKey}`);
                if (row) {
                    // El primer input es el del peso
                    const weightInput = row.querySelectorAll('.gym-input')[0];
                    if (weightInput) weightInput.value = v;
                }
            }
        }
    }
    // ────────────────────────────────────────────────────────

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionState));
}

function toggleGlobalUnit() {
    globalUnit = globalUnit === 'kg' ? 'lbs' : 'kg';
    localStorage.setItem(UNIT_KEY, globalUnit);
    document.getElementById('unit-disp').innerText = globalUnit.toUpperCase();
    if (navigator.vibrate) navigator.vibrate([20]);

    buildBarbellUI();
    buildDumbGrid();
    updateCalcUnitLabels();
    updateHomeStats();
    renderHistory();
    if (!document.getElementById('view-workout').classList.contains('hidden')) {
        renderDay(currentDay);
    }
}

function formatUnitDisplay(valBaseKg) {
    if (valBaseKg === '' || valBaseKg === null || valBaseKg === undefined) return '';
    const val = parseFloat(valBaseKg);
    if (isNaN(val)) return '';
    const converted = globalUnit === 'lbs' ? val * 2.20462 : val;
    return (Number.isInteger(converted) || parseFloat(converted.toFixed(1)) === Math.round(converted))
        ? Math.round(converted).toString()
        : converted.toFixed(1);
}

function loadRoutine() {
    const saved = localStorage.getItem(ROUTINE_KEY);
    if (saved) {
        try { ROUTINE = JSON.parse(saved); }
        catch (e) { ROUTINE = JSON.parse(JSON.stringify(DEFAULT_ROUTINE)); }
    } else {
        ROUTINE = JSON.parse(JSON.stringify(DEFAULT_ROUTINE));
        saveRoutine();
    }
}

let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}
function playSound(type) {
    try {
        const ctx = getAudioCtx();
        const sequences = {
            check: [{ f: 600, t: 0 }, { f: 900, t: 0.08 }],
            complete: [{ f: 523, t: 0 }, { f: 659, t: 0.1 }, { f: 784, t: 0.2 }, { f: 1046, t: 0.3 }],
            timerEnd: [{ f: 440, t: 0 }, { f: 550, t: 0.18 }, { f: 660, t: 0.36 }],
            pr: [{ f: 659, t: 0 }, { f: 784, t: 0.08 }, { f: 880, t: 0.16 }, { f: 1046, t: 0.24 }, { f: 880, t: 0.32 }, { f: 1046, t: 0.4 }],
            save: [{ f: 784, t: 0 }, { f: 880, t: 0.09 }, { f: 1046, t: 0.18 }]
        };
        (sequences[type] || []).forEach(({ f, t }) => {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.type = type === 'pr' ? 'triangle' : 'sine';
            o.frequency.value = f;
            const at = ctx.currentTime + t;
            g.gain.setValueAtTime(0.09, at);
            g.gain.exponentialRampToValueAtTime(0.001, at + 0.3);
            o.start(at); o.stop(at + 0.35);
        });
    } catch (e) { }
}

function addRipple(e) {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    circle.style.cssText = `width:${diameter}px;height:${diameter}px;left:${e.clientX - rect.left - radius}px;top:${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-circle');
    btn.querySelector('.ripple-circle')?.remove();
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
}
function initRipples() {
    document.querySelectorAll('.ripple-btn').forEach(btn => {
        btn.removeEventListener('click', addRipple);
        btn.addEventListener('click', addRipple);
    });
}

/**
 * Universal icon renderer — Lucide name string OR legacy inline SVG HTML.
 * @param {string} nameOrSvg  - Lucide icon name (e.g. 'dumbbell') or raw SVG HTML
 * @param {string} cls        - CSS classes applied to the <i> tag
 */
function renderIcon(nameOrSvg, cls = 'w-6 h-6') {
    if (!nameOrSvg) return `<i data-lucide="dumbbell" class="${cls}"></i>`;
    if (nameOrSvg.includes('<')) return nameOrSvg; // legacy SVG string — pass through
    return `<i data-lucide="${nameOrSvg}" class="${cls}"></i>`;
}

const XP_PER_SET = 10;
const XP_PER_WORKOUT = 100;
const XP_PER_LEVEL = 500;
const LEVEL_ICONS = [
    'seedling',  // Level 1 — just starting
    'zap',       // Level 2 — energy awakens
    'flame',     // Level 3 — on fire
    'star',      // Level 4 — rising star
    'award',     // Level 5 — award winner
    'shield',    // Level 6 — fortress
    'target',    // Level 7 — locked on target
    'crown',     // Level 8 — royalty
    'gem',       // Level 9 — precious
    'trophy',    // Level 10 — champion
];
function addXP(amount) {
    const prevLevel = xpState.level;
    xpState.xp += amount;
    xpState.level = 1 + Math.floor(xpState.xp / XP_PER_LEVEL);

    achState.stats.level = xpState.level;

    saveXP();
    updateXPDisplay();
    showXPPopup(`+${amount} XP`);
    if (xpState.level > prevLevel) {
        setTimeout(() => showLevelUp(xpState.level), 600);
    }
    checkAchievements();
}
function showXPPopup(text) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.innerText = text;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1500);
}
function updateXPDisplay() {
    const pct = (xpState.xp % XP_PER_LEVEL) / XP_PER_LEVEL * 100;
    document.getElementById('hdr-level').innerText = xpState.level;
    document.getElementById('hdr-xp-bar').style.width = pct + '%';
    document.getElementById('hdr-streak').innerText = xpState.streak;
    const elStreak = document.getElementById('stat-streak');
    if (elStreak) elStreak.innerText = xpState.streak;
}
function showLevelUp(level) {
    const overlay = document.getElementById('levelup-overlay');
    const iconName = LEVEL_ICONS[Math.min(level - 1, LEVEL_ICONS.length - 1)];
    const luIcon = document.getElementById('lu-icon');
    luIcon.innerHTML = renderIcon(iconName, 'w-12 h-12');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    document.getElementById('lu-level').innerText = `LVL ${level}`;
    document.getElementById('lu-msg').innerText = getLevelMsg(level);
    overlay.classList.add('show');
    playSound('complete');
    launchConfetti();
}
function closeLevelUp() { document.getElementById('levelup-overlay').classList.remove('show'); }
function getLevelMsg(lvl) {
    const msgs = ['', '¡Empezando fuerte!', 'Ya eres una máquina 💪', '¡Nadie te para ahora!', '¡Leyenda del gimnasio!', '¡Imparable, Valeria!', '¡Máquina absoluta! 🔥', '¡Élite del fitness! 👑', '¡Más allá del límite! 💎', '¡Mítica e irrepetible! 🌟'];
    return msgs[Math.min(lvl, msgs.length - 1)] || '¡Sigue adelante!';
}
function updateStreak() {
    const today = new Date().toDateString();
    if (xpState.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    xpState.streak = (xpState.lastDate === yesterday) ? xpState.streak + 1 : 1;
    if (!xpState.lastDate) xpState.streak = 1;
    xpState.lastDate = today;

    achState.stats.streak = xpState.streak;

    saveXP();
    checkAchievements();
}

function checkPR(exerciseName, weightKg) {
    if (weightKg === '' || weightKg === null || weightKg === undefined) return false;
    const w = parseFloat(weightKg);
    if (isNaN(w) || w <= 0) return false;
    if (!prState[exerciseName] || w > prState[exerciseName]) {
        prState[exerciseName] = w;
        localStorage.setItem(PR_KEY, JSON.stringify(prState));
        return true;
    }
    return false;
}

function calcSessionVolume() {
    return Object.values(sessionState).reduce((sum, v) => {
        if (v.done) {
            const w = parseFloat(v.w) || 0;
            const r = parseFloat(v.r) || 0;
            return sum + w * r;
        }
        return sum;
    }, 0);
}
function calcTotalVolume() {
    return historyState.reduce((sum, s) => sum + (parseFloat(s.volume) || 0), 0);
}

function renderHeatmap() {
    const container = document.getElementById('heatmap-container');
    if (!container) return;
    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const today = new Date();
    const todayIdx = (today.getDay() + 6) % 7;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - todayIdx);
    const workedSet = new Set(historyState.map(s => s.dateRaw).filter(Boolean));
    let workedCount = 0;
    const html = days.map((d, i) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateStr = date.toDateString();
        const isToday = i === todayIdx;
        const worked = workedSet.has(dateStr);
        if (worked) workedCount++;
        const cls = worked ? 'worked' : isToday ? 'today' : 'rest';
        return `<div class="heatmap-dot ${cls}"><span style="font-size:13px">${worked ? '✓' : isToday ? '●' : d}</span><span>${d}</span></div>`;
    }).join('');
    container.innerHTML = html;
    document.getElementById('week-summary').innerText = `${workedCount} / 7 días`;
}

function updateHomeStats() {
    if (!document.getElementById('stat-workouts')) return;
    animateCount('stat-workouts', historyState.length);
    animateCount('stat-streak', xpState.streak);
    const volBase = calcTotalVolume();
    const dispVol = globalUnit === 'lbs' ? volBase * 2.20462 : volBase;
    const txt = dispVol > 9999 ? (dispVol / 1000).toFixed(1) + 'k' : Math.round(dispVol);
    document.getElementById('stat-volume').innerText = `${txt} ${globalUnit.toUpperCase()}`;
}

/* ════════════════════════════════════════════════════
   ANATOMY HEATMAP UI UPDATER
════════════════════════════════════════════════════ */

function updateAnatomyHeatmap() {
    const fatigueData = calculateMuscleFatigue();

    // Color mapping function: 0% (green) → 50% (pink) → 100% (red)
    function getColorForFatigue(fatigue) {
        // fatigue: 0-100 (0 = recovered/green, 100 = completely exhausted/red)

        if (fatigue <= 20) {
            // Green: fully recovered
            return { fill: '#10b981', stroke: '#047857' }; // emerald
        } else if (fatigue <= 40) {
            // Light Pink: mild fatigue
            return { fill: '#fce7f3', stroke: 'var(--pink-border)' }; // pink-100
        } else if (fatigue <= 65) {
            // Vibrant Pink: moderate fatigue
            return { fill: 'var(--pink)', stroke: 'var(--pink-dark)' }; // primary pink
        } else {
            // Deep Red: high fatigue, needs rest
            return { fill: '#dc2626', stroke: '#991b1b' }; // red-600/700
        }
    }

    // Update all muscle group paths
    document.querySelectorAll('.muscle-path').forEach(path => {
        const muscle = path.getAttribute('data-muscle');
        if (muscle && fatigueData[muscle] !== undefined) {
            const colors = getColorForFatigue(fatigueData[muscle]);
            path.setAttribute('fill', colors.fill);
            path.setAttribute('stroke', colors.stroke);
        }
    });

    // Update the overall fatigue indicator badge
    const overallFatigue = getOverallFatiguePercentage();
    const indicator = document.getElementById('fatigue-indicator');
    if (indicator) {
        let status, colorClass;

        if (overallFatigue <= 25) {
            status = `100% Recuperada ✨`;
            colorClass = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
        } else if (overallFatigue <= 50) {
            status = `${100 - overallFatigue}% Fresca 💪`;
            colorClass = 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
        } else if (overallFatigue <= 75) {
            status = `${100 - overallFatigue}% Energía ⚡`;
            colorClass = 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
        } else {
            status = `Descansa 🧘‍♀️`;
            colorClass = 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
        }

        indicator.className = `text-[10px] font-black px-2 py-1 rounded-full ${colorClass}`;
        indicator.innerText = status;
    }
}

function animateCount(id, target) {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0, step = target / 20;
    const t = setInterval(() => { start = Math.min(start + step, target); el.innerText = Math.round(start); if (start >= target) clearInterval(t); }, 30);
}

function renderProgressChart() {
    const wrap = document.getElementById('progress-chart-wrap');
    const svgCont = document.getElementById('progress-chart-svg');
    const labelCont = document.getElementById('progress-chart-labels');

    if (!wrap || historyState.length < 2) {
        if (wrap) wrap.classList.add('hidden');
        return;
    }
    wrap.classList.remove('hidden');

    const data = [...historyState].reverse().slice(-8);
    const maxVol = Math.max(...data.map(s => parseFloat(s.volume) || 0), 1);
    const W = 300, H = 70, PX = 12, PY = 8;

    const pts = data.map((s, i) => {
        const x = PX + (i / (data.length - 1)) * (W - PX * 2);
        const y = PY + (1 - ((parseFloat(s.volume) || 0) / maxVol)) * (H - PY * 2);
        return { x, y, s };
    });

    const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
    const areaClose = `${pts[pts.length - 1].x},${H} ${pts[0].x},${H}`;

    const dots = pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="var(--pink)" stroke="var(--card)" stroke-width="2"/>`).join('');

    svgCont.innerHTML = `
        <svg viewBox="0 0 ${W} ${H}" width="100%" style="overflow:visible">
            <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--pink)" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="var(--pink)" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <polyline fill="url(#chartGrad)" stroke="none" points="${polyline} ${areaClose}"/>
            <polyline fill="none" stroke="var(--pink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${polyline}"/>
            ${dots}
        </svg>`;

    labelCont.innerHTML = `
        <span class="text-[9px] text-muted font-bold">${data[0].date}</span>
        <span class="text-[9px] text-pink-500 font-bold">${formatUnitDisplay(maxVol)} ${globalUnit.toUpperCase()} máx</span>
        <span class="text-[9px] text-muted font-bold">${data[data.length - 1].date}</span>`;
}

function launchConfetti() {
    if (typeof confetti === 'undefined') return;
    const colors = ['#f472b6', '#db2777', '#fdf2f8', '#ffffff', '#fbbf24', '#a78bfa'];
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors });
    setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 }, colors }), 200);
    setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 }, colors }), 400);
}

function renderWorkoutSelector() {
    const cont = document.getElementById('workout-day-cards');
    if (!cont) return;

    const nextDaySuggestion = (historyState.length % Object.keys(ROUTINE).length) + 1;

    cont.innerHTML = Object.keys(ROUTINE).sort((a, b) => a - b).map(d => {
        const isSuggested = parseInt(d) === nextDaySuggestion;
        const iconName = ROUTINE[d].icon || 'zap';
        return `
                <div class="bg-white dark:bg-[#2C2C2E] rounded-[24px] p-6 shadow-sm active:scale-95 transition-all ripple-btn border border-frost-100 dark:border-[#3A3A3C] ${isSuggested ? 'ring-2 ring-rose-300 dark:ring-rose-500/40' : ''}" onclick="startDay(${d})">
                    <div class="flex justify-between items-start w-full mb-3">
                        <div class="w-12 h-12 rounded-[12px] bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-500">
                            <i data-lucide="${iconName}" class="w-6 h-6"></i>
                        </div>
                        ${isSuggested ? '<span class="text-[9px] font-black bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full uppercase tracking-widest">Sugerido hoy</span>' : ''}
                    </div>
                    <h3 class="font-bold text-base text-frost-900 dark:text-white mb-1">Día ${d}</h3>
                    <p class="text-[13px] text-secondary">${ROUTINE[d].label}</p>
                </div>`;
    }).join('');
    initRipples();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
function renderDayPills() {
    const cont = document.getElementById('day-pills-container');
    if (!cont) return;
    cont.innerHTML = Object.keys(ROUTINE).sort((a, b) => a - b).map(d => `
        <button onclick="changeDay(${d})" id="tab-${d}" class="day-pill ripple-btn ${parseInt(d) === currentDay ? 'active' : ''} flex items-center justify-center gap-1">
            <i data-lucide="${ROUTINE[d].icon || 'zap'}" class="w-4 h-4 mr-1"></i> D${d}
        </button>`).join('');
    initRipples();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
/* ════════════════════════════════════════════════════
   ANATOMICAL RECOVERY & FATIGUE CALCULATION
════════════════════════════════════════════════════ */

// Exercise-to-Muscle mapping (comprehensive)
const EXERCISE_MUSCLE_MAP = {
    'chest': ['press inclinado', 'press militar', 'vuelos posteriores', 'pecho', 'pectoral'],
    'back': ['remo', 'jalón', 'pullover', 'espalda', 'dorsal', 'polea', 'lat pulldown'],
    'shoulders': ['elevaciones laterales', 'press militar', 'deltoides', 'lateral raise', 'overhead'],
    'arms': ['curl', 'tríceps', 'brazo', 'martillo', 'hammer', 'pushdown', 'rope'],
    'quads': ['sentadilla', 'extensión cuádriceps', 'prensa', 'leg extension', 'leg press', 'cuádriceps', 'squat'],
    'glutes': ['peso muerto', 'glúteo', 'kickback', 'hip thrust', 'sentadilla búlgara', 'bulgarian'],
    'core': ['silla romana', 'ab', 'crunch', 'core', 'abdomen']
};

function getMuscleGroupFromExercise(exerciseName) {
    const nameLower = exerciseName.toLowerCase();
    for (const [muscle, keywords] of Object.entries(EXERCISE_MUSCLE_MAP)) {
        if (keywords.some(kw => nameLower.includes(kw))) {
            return muscle;
        }
    }
    // Default fallback: if we can't categorize, assume it's compound (affects all)
    return null;
}

function calculateMuscleFatigue() {
    const now = new Date().getTime();
    const HOURS_72 = 72 * 60 * 60 * 1000;
    const cutoffTime = now - HOURS_72;

    // Initialize fatigue for each muscle (0 = fresh, 100 = completely fatigued)
    const muscleFatigue = {
        chest: 0,
        back: 0,
        shoulders: 0,
        arms: 0,
        quads: 0,
        glutes: 0,
        core: 0
    };

    const muscleWorkCount = {
        chest: 0,
        back: 0,
        shoulders: 0,
        arms: 0,
        quads: 0,
        glutes: 0,
        core: 0
    };

    // Process each history entry from most recent
    for (let i = 0; i < historyState.length; i++) {
        const session = historyState[i];
        if (!session.dateRaw) continue;

        // Parse the date from dateRaw (format: "Wed Apr 22 2026")
        const sessionDate = new Date(session.dateRaw);
        const sessionTime = sessionDate.getTime();

        // Only look at last 72 hours
        if (sessionTime < cutoffTime) break;

        // Calculate hours ago (0 = today, 24 = yesterday, 48 = 2 days ago, etc)
        const hoursAgo = (now - sessionTime) / (60 * 60 * 1000);

        // Fatigue decay function: Starts at 100%, decays to 0 over 72 hours
        let fatigueMultiplier = 0;
        if (hoursAgo < 24) {
            fatigueMultiplier = 1.0; // 100% - just trained
        } else if (hoursAgo < 48) {
            fatigueMultiplier = 0.65; // 65% - trained yesterday
        } else {
            fatigueMultiplier = 0.25; // 25% - trained 2-3 days ago
        }

        // Process exercises in this session
        if (session.exLog && typeof session.exLog === 'object') {
            for (const [exerciseName, exData] of Object.entries(session.exLog)) {
                const muscle = getMuscleGroupFromExercise(exerciseName);

                // If we identified a muscle group, add fatigue
                if (muscle && muscleFatigue.hasOwnProperty(muscle)) {
                    // Weight of contribution: more volume = more fatigue
                    const volume = exData.maxWeight || 10; // If no weight, use default
                    const contribution = Math.min(40, volume / 5); // Cap at 40 per exercise

                    muscleFatigue[muscle] += contribution * fatigueMultiplier;
                    muscleWorkCount[muscle] += 1;
                }
            }
        }
    }

    // Normalize fatigue to 0-100 scale
    const normalizedFatigue = {};
    for (const muscle in muscleFatigue) {
        // Cap at 100, floor at 0
        normalizedFatigue[muscle] = Math.max(0, Math.min(100, muscleFatigue[muscle]));
    }

    return normalizedFatigue;
}

function getOverallFatiguePercentage() {
    const fatigueData = calculateMuscleFatigue();
    const avgFatigue = Object.values(fatigueData).reduce((a, b) => a + b, 0) / Object.keys(fatigueData).length;
    return Math.round(avgFatigue);
}

/* ════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════ */
window.onload = () => {
    if (localStorage.getItem('dark') === 'true') {
        document.documentElement.classList.add('dark');
    }
    document.getElementById('unit-disp').innerText = globalUnit.toUpperCase();

    loadRoutine();
    sessionState = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}');
    achState = JSON.parse(localStorage.getItem(ACH_KEY) || '{"unlocked":[],"stats":{"prs":0,"workouts":0,"chest":0,"gluteLegs":0,"arms":0,"back":0,"level":1,"streak":0}}');
    historyState = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    xpState = JSON.parse(localStorage.getItem(XP_KEY) || '{"xp":0,"level":1,"streak":0,"lastDate":null}');
    prState = JSON.parse(localStorage.getItem(PR_KEY) || '{}');

    buildBarbellUI();
    buildDumbGrid();
    updateCalcUnitLabels();

    setRandomQuote();
    updateXPDisplay();
    updateHomeStats();
    renderHeatmap();
    initRipples();

    if (typeof lucide !== 'undefined') lucide.createIcons();

    setView('home');

    const hasActive = Object.keys(sessionState).some(k => sessionState[k].done);
    if (hasActive) {
        navTo('workout');
        showToast('Reanudando tu sesión... 💪');
    }
};

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark', isDark);
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" class="w-5 h-5"></i>`;
        lucide.createIcons();
    }
}
function showToast(msg) {
    const toast = document.getElementById('toast-container');
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ─── SISTEMA DE LOGROS Y MEDALLAS ─── */
function checkAchievements() {
    let newlyUnlocked = [];
    MEDALS_DB.forEach(medal => {
        if (!achState.unlocked.includes(medal.id)) {
            const currentStat = achState.stats[medal.req.type] || 0;
            if (currentStat >= medal.req.count) {
                achState.unlocked.push(medal.id);
                newlyUnlocked.push(medal);
            }
        }
    });

    if (newlyUnlocked.length > 0) {
        saveAchievements();
        newlyUnlocked.forEach((medal, index) => {
            setTimeout(() => showMedalPopup(medal), index * 3500);
        });
        if (typeof renderTrophyShowcase === 'function') renderTrophyShowcase();
    }
}

function showMedalPopup(medal) {
    playSound('pr');
    launchConfetti();

    const popup = document.createElement('div');
    popup.className = 'medal-popup';
    popup.innerHTML = `
                <div class="medal-icon-wrap">${renderIcon(medal.icon, 'w-8 h-8')}</div>
                <div>
                    <p class="text-[9px] font-black uppercase tracking-widest text-gold mb-0.5" style="color: var(--gold)">¡Nuevo Logro!</p>
                    <h3 class="font-bold text-slate-800 dark:text-white leading-tight">${medal.title}</h3>
                    <p class="text-[10px] text-muted mt-1 leading-snug">${medal.desc}</p>
                </div>
            `;
    document.body.appendChild(popup);
    popup.offsetHeight;
    popup.classList.add('show');
    if (typeof lucide !== 'undefined') lucide.createIcons();

    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 500);
    }, 4000);
}

function categorizeAndAddStats(exName, setsCompleted) {
    const name = exName.toLowerCase();
    if (name.includes('press') || name.includes('pecho') || name.includes('vuelos') || name.includes('militar')) {
        achState.stats.chest += setsCompleted;
    } else if (name.includes('sentadilla') || name.includes('prensa') || name.includes('glúteo') || name.includes('isquio') || name.includes('peso muerto') || name.includes('cuádriceps')) {
        achState.stats.gluteLegs += setsCompleted;
    } else if (name.includes('curl') || name.includes('tríceps') || name.includes('martillo') || name.includes('brazo')) {
        achState.stats.arms += setsCompleted;
    } else if (name.includes('remo') || name.includes('jalón') || name.includes('pullover') || name.includes('espalda')) {
        achState.stats.back += setsCompleted;
    }
}

function renderTrophyShowcase() {
    const cont = document.getElementById('trophy-showcase-container');
    const countEl = document.getElementById('trophy-count');
    if (!cont) return;

    cont.innerHTML = MEDALS_DB.map(m => {
        const unlocked = achState.unlocked.includes(m.id);
        return `
                <div class="bg-white dark:bg-frost-900/30 rounded-[16px] p-4 shadow-sm border border-frost-100 dark:border-frost-800 text-center cursor-pointer active:scale-90 transition-transform ripple-btn hover:shadow-md ${unlocked ? 'ring-2 ring-warning dark:ring-warning/50' : 'opacity-50'}" onclick="alert('${m.title}\\n\\n${m.desc}')" title="${m.title}">
                    <div class="flex items-center justify-center mb-2 text-rose-500">${renderIcon(m.icon, 'w-8 h-8')}</div>
                    <p class="text-[9px] font-bold uppercase leading-tight text-frost-900 dark:text-white">${m.title}</p>
                </div>`;
    }).join('');

    if (countEl) countEl.innerText = `${achState.unlocked.length} / ${MEDALS_DB.length}`;
    if (typeof lucide !== 'undefined') lucide.createIcons();

    if (document.getElementById('stat-ach-prs')) {
        document.getElementById('stat-ach-prs').innerText = achState.stats.prs;
        document.getElementById('stat-ach-workouts').innerText = achState.stats.workouts;
    }
}

/* ─── NAVEGACIÓN ─── */
const ALL_VIEWS = ['home', 'workout', 'history', 'settings', 'achievements'];

function setView(v) {
    ALL_VIEWS.forEach(x => {
        const el = document.getElementById(`view-${x}`);
        if (el) {
            el.classList.toggle('hidden', x !== v);
            if (x === v) { el.style.animation = 'none'; el.offsetHeight; el.style.animation = ''; }
        }
    });

    ALL_VIEWS.forEach(x => {
        const navEl = document.getElementById(`nav-${x}`);
        if (navEl) navEl.classList.toggle('active', x === v);
    });

    const hasActive = Object.keys(sessionState).some(k => {
        const s = sessionState[k];
        return s && (s.done || (s.w !== '' && s.w !== null && s.w !== undefined) || (s.r !== '' && s.r !== null && s.r !== undefined));
    });

    const tb = document.getElementById('bottom-timer-bar');
    if (tb) {
        if (v === 'workout' && hasActive) {
            tb.classList.remove('hidden');
            tb.classList.remove('hidden-bar');
        } else {
            tb.classList.add('hidden');
            tb.classList.add('hidden-bar');
        }
    }
    if (typeof minimizeTimer === 'function') minimizeTimer();

    if (v === 'home') {
        updateHomeStats();
        renderHeatmap();
        checkActiveSession();
    }

    if (v === 'workout') {
        if (hasActive) {
            showActiveWorkoutZone(true);
            renderDay(currentDay);
        } else {
            showActiveWorkoutZone(false);
            renderWorkoutSelector();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (v === 'achievements') {
        renderTrophyShowcase();
    }

    if (v === 'history') {
        renderHistory();
    }

    if (v === 'settings') {
        renderEditor();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showActiveWorkoutZone(show) {
    document.getElementById('workout-selector-zone').classList.toggle('hidden', show);
    document.getElementById('active-workout-zone').classList.toggle('hidden', !show);

    const globalHeader = document.getElementById('main-global-header');
    if (globalHeader) globalHeader.style.display = show ? 'none' : 'flex';
    
    const tb = document.getElementById('bottom-timer-bar');
    if (tb) {
        if (show && document.getElementById('view-workout') && !document.getElementById('view-workout').classList.contains('hidden')) {
            tb.classList.remove('hidden');
            tb.classList.remove('hidden-bar');
        } else {
            tb.classList.add('hidden');
            tb.classList.add('hidden-bar');
        }
    }
}

/* ─── ACTIVE SESSION BANNER ─── */
function checkActiveSession() {
    const activeDays = new Set();
    for (const key of Object.keys(sessionState)) {
        const v = sessionState[key];
        if (v && (v.done || (v.w !== '' && v.w !== null && v.w !== undefined) || (v.r !== '' && v.r !== null))) {
            activeDays.add(parseInt(key.split('_')[0]));
        }
    }
    const banner = document.getElementById('active-session-banner');
    if (!banner) return;
    const activeDay = activeDays.size > 0 ? [...activeDays][0] : null;
    if (activeDay && ROUTINE[activeDay]) {
        banner.innerHTML = `
            <div class="home-card active-session ripple-btn" onclick="continueDay(${activeDay})">
                <div class="flex items-center gap-3 mb-1">
                    <span class="flex items-center text-white">${renderIcon(ROUTINE[activeDay].icon)}</span>
                    <h3 class="font-bold text-white text-base">Continuar sesión</h3>
                </div>
                <p class="text-[12px] text-pink-100 font-medium">Día ${activeDay} · ${ROUTINE[activeDay].label}</p>
                <div class="mt-2 text-xs font-bold bg-white/20 px-3 py-1.5 rounded-lg inline-block">REANUDAR ➔</div>
            </div>`;
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
    initRipples();
}

function startDay(d) {
    const activeDays = new Set();
    for (const key of Object.keys(sessionState)) {
        const v = sessionState[key];
        if (v && (v.done || v.w || v.r)) activeDays.add(parseInt(key.split('_')[0]));
    }
    const activeDay = activeDays.size > 0 ? [...activeDays][0] : null;

    if (activeDay && activeDay !== d) {
        if (!confirm(`Tienes progreso en el Día ${activeDay}. ¿Borrar y empezar Día ${d}?`)) return;
        sessionState = {};
        window._activePrefill = null;
        persistSession();
        checkActiveSession();
    }

    currentDay = d;
    document.getElementById('workout-title-disp').innerText = ROUTINE[d].label;

    // ─── SMART PREFILL: only runs when the day has no existing data ───
    const hasDayData = Object.keys(sessionState).some(k => {
        const parts = k.split('_');
        return parts[0] == d && (sessionState[k].done || sessionState[k].w || sessionState[k].r);
    });

    if (!hasDayData) {
        const applied = applySmartPrefill(d);
        if (applied) {
            const hasOverload = Object.values(window._activePrefill || {}).some(p => p.shouldOverload);
            showToast(hasOverload
                ? '📈 ¡Sobrecarga progresiva lista para ti!'
                : '💡 Pesos de tu última sesión pre-cargados');
        }
    }

    showActiveWorkoutZone(true);
    renderDay(d);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function continueDay(d) {
    currentDay = d;
    // navTo → setView → now correctly detects w/r/done → shows active zone
    navTo('workout');
    // Title is set after setView because showActiveWorkoutZone(true) makes the header visible
    document.getElementById('workout-title-disp').innerText = ROUTINE[d].label;
}
function changeDay(day) {
    currentDay = day;
    document.getElementById('workout-title-disp').innerText = ROUTINE[day].label;
    renderDay(day);
    document.querySelectorAll('.day-pill').forEach(btn => btn.classList.toggle('active', btn.id === `tab-${day}`));
}

/* ─── RENDER DÍA ─── */
function getMediaHTML(src, id, mode) {
    return src ? `<video id="${id}" src="${src}" class="gif-video" data-mode="${mode}" autoplay loop muted playsinline></video>` : '';
}

// ─── FUNCIONES DE TIPS Y CALENTAMIENTO ───
function toggleTips(id) {
    const panel = document.getElementById(`tips-${id}`);
    if (panel) panel.classList.toggle('show');
    if (navigator.vibrate) navigator.vibrate([10]);
}

function addWarmup(d, exI) {
    const key = `warmups_${d}_${exI}`;
    if (!sessionState[key]) sessionState[key] = 0;
    sessionState[key] += 1; // Añadimos una serie de aprox
    persistSession();
    renderDay(d); // Recargamos la vista de ese día
    if (navigator.vibrate) navigator.vibrate([20]);
}

function renderDay(d) {
    const cont = document.getElementById('exercises-container');
    const isDark = document.documentElement.classList.contains('dark');

    cont.innerHTML = ROUTINE[d].exercises.map((ex, i) => {
        let rowsHtml = '';

        // ─── PRE-CALCULATE PROGRESS (so we can show it on first render) ───
        let doneCount = 0;
        for (let s = 1; s <= ex.sets; s++) {
            if (sessionState[`${d}_${i}_${s}`]?.done) doneCount++;
        }
        const pct = ex.sets > 0 ? Math.round((doneCount / ex.sets) * 100) : 0;
        const isComplete = doneCount === ex.sets && ex.sets > 0;

        // ─── OVERLOAD / PREFILL BANNER (shown above set rows) ───
        const firstKey = `${d}_${i}_1`;
        const hasOverload = !!sessionState[firstKey]?.overloadSuggested;
        const hasPrefill = !hasOverload && !!sessionState[firstKey]?.prefilled && !sessionState[firstKey]?.done;
        const incLabel = globalUnit === 'lbs' ? '5 lbs' : '2.5 kg';

        const overloadBanner = hasOverload ? `
            <div style="display:flex;align-items:center;gap:10px;
                background:${isDark ? 'rgba(36,138,61,0.1)' : 'rgba(36,138,61,0.08)'};
                border:1px solid ${isDark ? 'rgba(36,138,61,0.3)' : 'rgba(36,138,61,0.2)'};
                border-radius:16px;padding:12px 14px;margin-bottom:12px">
                <span style="font-size:16px">📈</span>
                <div>
                    <p style="font-size:10px;font-weight:800;letter-spacing:0.04em;margin:0;
                        color:${isDark ? '#6ee7b7' : '#248A3D'}">Sobrecarga progresiva</p>
                    <p style="font-size:10px;font-weight:600;margin:2px 0 0;
                        color:${isDark ? '#86c699' : '#248A3D'}">
                        +${incLabel} sugeridos</p>
                </div>
            </div>` : '';

        const prefillBanner = hasPrefill ? `
            <div style="display:flex;align-items:center;gap:10px;
                background:var(--rose-tint);border:1px solid rgba(255,143,163,0.2);
                border-radius:16px;padding:12px 14px;margin-bottom:12px">
                <span style="font-size:14px">💾</span>
                <p style="font-size:11px;font-weight:600;color:var(--rose-hover);margin:0">
                    Pesos de última sesión pre-cargados</p>
            </div>` : '';

        // ─── WARMUP ROWS ───
        const warmupsCount = sessionState[`warmups_${d}_${i}`] || 0;
        for (let w = 1; w <= warmupsCount; w++) {
            const k = `${d}_${i}_W${w}`;
            const st = sessionState[k] || {};
            rowsHtml += `
                <div class="set-row warmup-row ${st.done ? 'done' : ''}" id="row-${k}">
                    <span class="warmup-label">W</span>
                    <input type="text" inputmode="decimal" readonly class="gym-input cursor-pointer" placeholder="Ej. 20"
                        value="${st.w ? formatUnitDisplay(st.w) : ''}"
                        onclick="openCalc('${k}','${ex.name}')">
                    <input type="text" inputmode="numeric" readonly class="gym-input cursor-pointer" placeholder="Ej. 12"
                        value="${st.r || ''}" onclick="openReps('${k}',this.value)">
                    <button onclick="markSet('${k}',${i},${ex.sets},'${ex.name}')"
                        class="check-btn ${st.done ? 'done' : ''}">${st.done ? '✓' : ''}</button>
                </div>`;
        }

        // ─── NORMAL SET ROWS ───
        for (let s = 1; s <= ex.sets; s++) {
            const k = `${d}_${i}_${s}`;
            const st = sessionState[k] || {};
            const isOverloadSet = s === 1 && !!st.overloadSuggested;
            // Subtle left-accent on prefilled (not yet done) rows
            const prefillStyle = (st.prefilled && !st.done)
                ? 'border-left:2.5px solid var(--pink);border-radius:12px;'
                : '';

            rowsHtml += `
                <div class="set-row ${st.done ? 'done' : ''}" id="row-${k}"
                    style="${prefillStyle}">
                    <span style="font-size:10px;font-weight:800;min-width:14px;text-align:center;
                        color:${isOverloadSet ? 'var(--pink)' : 'var(--text-muted)'}">
                        ${isOverloadSet ? '▲' : s}
                    </span>
                    <input type="text" inputmode="decimal" readonly class="gym-input cursor-pointer" placeholder="Ej. 20"
                        value="${st.w ? formatUnitDisplay(st.w) : ''}"
                        onclick="openCalc('${k}','${ex.name}')">
                    <input type="text" inputmode="numeric" readonly class="gym-input cursor-pointer" placeholder="Ej. 12"
                        value="${st.r || ''}" onclick="openReps('${k}',this.value)">
                    <button onclick="markSet('${k}',${i},${ex.sets},'${ex.name}')"
                        class="check-btn ${st.done ? 'done' : ''}">${st.done ? '✓' : ''}</button>
                </div>`;
        }

        return `
        <div class="bg-white dark:bg-[#2C2C2E] rounded-[24px] p-6 mb-4 shadow-sm border border-frost-100 dark:border-[#3A3A3C] ${isComplete ? 'ring-1 ring-green-500/30 dark:ring-green-400/20' : ''}" id="card-${d}-${i}">

            <!-- ─── HEADER ─── -->
            <div class="flex justify-between items-start mb-5">
                <div class="flex-1">
                    <div class="flex items-center gap-2 flex-wrap mb-2">
                        <h3 class="font-bold text-base text-frost-900 dark:text-white">${ex.name}</h3>
                        <span class="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-500/20 px-2.5 py-1 rounded-full">${ex.sets}×${ex.reps}</span>
                        ${isComplete
                ? `<span class="text-[10px] font-black text-success bg-success-bg dark:bg-success-600/20 px-2.5 py-1 rounded-full">✓ Completo</span>`
                : ''}
                    </div>
                    <p class="text-[12px] text-secondary font-500">Tip: ${ex.tip}</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="showExerciseStats('${ex.name}')"
                        class="w-9 h-9 rounded-[12px] bg-frost-100 dark:bg-frost-800 flex items-center justify-center text-[13px] text-secondary active:scale-85 transition-transform"
                        title="Ver estadísticas"><i data-lucide="bar-chart-2" class="w-4 h-4"></i></button>
                    <button onclick="toggleTips('${d}_${i}')"
                        class="w-9 h-9 rounded-[12px] bg-rose-50 dark:bg-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 active:scale-85 transition-transform"
                        title="Ver tips"><i data-lucide="lightbulb" class="w-4 h-4"></i></button>
                </div>
            </div>

            <!-- ─── COACH TIPS ─── -->
            <div id="tips-${d}_${i}" class="coach-tips-panel hidden bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 rounded-[16px] p-4 mb-4 text-[13px] text-frost-900 dark:text-frost-100 leading-relaxed">
                <div class="flex items-start gap-2">
                    <i data-lucide="info" class="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0"></i>
                    <div>${ex.details.replace(/🎯/g, '').replace(/Coach:/g, '<b>Coach:</b>')}</div>
                </div>
            </div>

            <!-- ─── EXERCISE VIDEO ─── -->
            <div class="w-full h-56 rounded-[18px] bg-frost-100 dark:bg-frost-800 overflow-hidden mb-5">
                <video src="${ex.gif}" class="w-full h-full object-cover" autoplay loop muted playsinline></video>
            </div>

            <!-- ─── PROGRESS BAR ─── -->
            <div class="mb-5">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="text-[11px] font-bold uppercase tracking-wide text-secondary">Progreso · ${doneCount}/${ex.sets}</h4>
                    <button onclick="addWarmup('${d}',${i})"
                        class="text-[11px] font-bold text-warning bg-warning-bg dark:bg-warning/20 px-2.5 py-1 rounded-full">
                        + Aproximación</button>
                </div>
                <div class="h-2 bg-frost-100 dark:bg-frost-800 rounded-full overflow-hidden">
                    <div id="prog-bar-${d}-${i}"
                        class="h-full bg-rose-500 dark:bg-rose-400 rounded-full transition-all duration-500"
                        style="width:${pct}%"></div>
                </div>
            </div>

            ${overloadBanner}
            ${prefillBanner}
            
            <!-- ─── SET ROWS ─── -->
            <div class="space-y-2">${rowsHtml}</div>
        </div>`;
    }).join('');

    updateDayPills(d);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleEx(d, i) { document.getElementById(`details-${d}-${i}`).classList.toggle('expanded'); }

function toggleGif(d, i) {
    const wrap = document.getElementById(`media-wrap-${d}-${i}`);
    const media = document.getElementById(`media-${d}-${i}`);
    const ex = ROUTINE[d].exercises[i];
    const isMain = media.getAttribute('data-mode') === 'main';
    media.style.opacity = '0';
    setTimeout(() => {
        media.remove();
        wrap.insertAdjacentHTML('afterbegin', getMediaHTML(isMain ? ex.gifVar : ex.gif, `media-${d}-${i}`, isMain ? 'var' : 'main'));
        const nm = document.getElementById(`media-${d}-${i}`);
        nm.style.opacity = '0';
        setTimeout(() => nm.style.opacity = '1', 50);
    }, 300);
}

function markSet(k, exI, totalSets, exName) {
    if (!sessionState[k]) sessionState[k] = { done: false, w: '', r: '' };
    const newState = !sessionState[k].done;
    sessionState[k].done = newState;
    persistSession();

    const row = document.getElementById(`row-${k}`);
    const btn = row?.querySelector('.check-btn');
    if (row) row.classList.toggle('done', newState);
    if (btn) { btn.classList.toggle('done', newState); btn.innerText = newState ? '✓' : ''; }
    
    if (newState && typeof toggleFocusMode === 'function') toggleFocusMode(true);

    if (newState) {
        playSound('check');
        addXP(XP_PER_SET);
        const weightKg = sessionState[k].w;
        const isNewPR = checkPR(exName, weightKg);
        if (isNewPR) {
            const card = document.getElementById(`card-${currentDay}-${exI}`);
            if (card) { card.classList.add('pr-card', 'animate-gold'); setTimeout(() => card.classList.remove('animate-gold'), 800); }
            playSound('pr');
            showToast(`🥇 ¡Nuevo PR en ${exName}! ${formatUnitDisplay(weightKg)} ${globalUnit.toUpperCase()}`);
            achState.stats.prs++;
        }
    }

    let doneCount = 0;
    for (let s = 1; s <= totalSets; s++) {
        if (sessionState[`${currentDay}_${exI}_${s}`]?.done) doneCount++;
    }
    const card = document.getElementById(`card-${currentDay}-${exI}`);
    const bar = document.getElementById(`prog-bar-${currentDay}-${exI}`);
    if (bar) bar.style.width = (doneCount / totalSets * 100) + '%';
    if (card) {
        if (doneCount === totalSets) {
            card.classList.add('complete', 'animate-splash');
            setTimeout(() => card.classList.remove('animate-splash'), 800);
            if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
            playSound('complete');
            showToast('¡Ejercicio completado! 🎉');
        } else {
            card.classList.remove('complete');
        }
    }

    updateOverallProgress();

    // 👇 AQUÍ ESTÁ EL CAMBIO CLAVE PARA EL DESPLIEGUE 👇
    if (newState) {
        expandTimer();
        startTimer();
    }
}

function updateOverallProgress() {
    let total = 0, comp = 0;
    ROUTINE[currentDay].exercises.forEach((ex, i) => {
        total += ex.sets;
        for (let s = 1; s <= ex.sets; s++) {
            if (sessionState[`${currentDay}_${i}_${s}`]?.done) comp++;
        }
    });
    const pct = total > 0 ? Math.round((comp / total) * 100) : 0;
    document.getElementById('total-progress-bar').style.width = pct + '%';
    document.getElementById('total-progress-text').innerText = pct + '%';
    const ring = document.getElementById('mini-ring-circle');
    if (ring) ring.style.strokeDashoffset = 56.5 * (1 - pct / 100);
}

/* ─── CALCULADORA DE PESO ─── */
let calcState = { activeKey: null, tab: 'barra', barW: 45, plates: [], dumbW: 0, machW: 0 };

function updateCalcUnitLabels() {
    const u = globalUnit.toUpperCase();
    const dumbLbl = document.getElementById('dumb-unit-label');
    const machLbl = document.getElementById('mach-unit-label');
    if (dumbLbl) dumbLbl.innerText = u;
    if (machLbl) machLbl.innerText = u;
}
/* ─── BARBELL UI BUILDER (unit-aware, called on load & unit switch) ─── */
function buildBarbellUI() {
    const isKg = globalUnit === 'kg';

    const bars = isKg
        ? [{ w: 20, label: 'Olímpica (20)' }, { w: 15, label: 'Corta (15)' }, { w: 10, label: 'Smith (10)' }]
        : [{ w: 45, label: 'Olímpica (45)' }, { w: 25, label: 'Corta (25)' }, { w: 15, label: 'Smith (15)' }];

    const platesCfg = isKg
        ? [
            { w: 20, sz: 'w-16 h-16', txt: 'text-xl', bd: 'border-4', bg: 'bg-pink-500', br: 'border-pink-600', sh: 'shadow-pink-200' },
            { w: 15, sz: 'w-14 h-14', txt: 'text-lg', bd: 'border-4', bg: 'bg-blue-500', br: 'border-blue-600', sh: 'shadow-blue-200' },
            { w: 10, sz: 'w-12 h-12', txt: 'text-base', bd: 'border-4', bg: 'bg-emerald-500', br: 'border-emerald-600', sh: 'shadow-emerald-200' },
            { w: 5, sz: 'w-10 h-10', txt: 'text-sm', bd: 'border-4', bg: 'bg-amber-500', br: 'border-amber-600', sh: 'shadow-amber-200' },
            { w: 2.5, sz: 'w-9 h-9', txt: 'text-[11px]', bd: 'border-2', bg: 'bg-purple-500', br: 'border-purple-600', sh: 'shadow-purple-200' }
        ]
        : [
            { w: 45, sz: 'w-16 h-16', txt: 'text-xl', bd: 'border-4', bg: 'bg-pink-500', br: 'border-pink-600', sh: 'shadow-pink-200' },
            { w: 25, sz: 'w-14 h-14', txt: 'text-lg', bd: 'border-4', bg: 'bg-blue-500', br: 'border-blue-600', sh: 'shadow-blue-200' },
            { w: 10, sz: 'w-12 h-12', txt: 'text-base', bd: 'border-4', bg: 'bg-emerald-500', br: 'border-emerald-600', sh: 'shadow-emerald-200' },
            { w: 5, sz: 'w-10 h-10', txt: 'text-sm', bd: 'border-4', bg: 'bg-amber-500', br: 'border-amber-600', sh: 'shadow-amber-200' },
            { w: 2.5, sz: 'w-9 h-9', txt: 'text-[11px]', bd: 'border-2', bg: 'bg-purple-500', br: 'border-purple-600', sh: 'shadow-purple-200' }
        ];

    // Validate calcState.barW against the current unit's bar list
    const validBarWs = bars.map(b => b.w);
    if (!validBarWs.includes(calcState.barW)) calcState.barW = bars[0].w;

    const barSel = document.getElementById('calc-bar-selector');
    if (barSel) {
        barSel.innerHTML = bars.map(b =>
            `<button onclick="setCalcBar(${b.w})" data-bar-w="${b.w}"
                class="px-4 py-2 text-[10px] font-bold rounded-full transition-all ripple-btn border
                    bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-700 dark:border-transparent">
                ${b.label}
            </button>`
        ).join('');
    }

    const plateCont = document.getElementById('calc-plate-btns');
    if (plateCont) {
        plateCont.innerHTML = platesCfg.map(p =>
            `<button onclick="addCalcPlate(${p.w})"
                class="plate-btn ${p.sz} ${p.bg} ${p.txt} ${p.bd} ${p.br} dark:shadow-none ${p.sh} shadow-lg ripple-btn">
                ${p.w}
            </button>`
        ).join('');
    }

    // Unit switch = fresh plate slate
    calcState.plates = [];
    setCalcBar(calcState.barW);
    setTimeout(initRipples, 50);
}
function buildDumbGrid() {
    const grid = document.getElementById('calc-dumb-grid');
    if (!grid) return;
    calcState.dumbW = 0;
    let html = '';
    if (globalUnit === 'kg') {
        [5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50].forEach(w => {
            const id = `db-btn-${String(w).replace('.', '_')}`;
            html += `<button onclick="setCalcDumb(${w})" id="${id}" class="dumb-btn p-3 rounded-2xl font-black text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 border-2 border-transparent active:scale-90 transition-transform text-xs ripple-btn">${w}</button>`;
        });
    } else {
        for (let w = 5; w <= 100; w += 5) {
            html += `<button onclick="setCalcDumb(${w})" id="db-btn-${w}" class="dumb-btn p-3 rounded-2xl font-black text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 border-2 border-transparent active:scale-90 transition-transform text-xs ripple-btn">${w}</button>`;
        }
    }
    grid.innerHTML = html;
    updateCalcUnitLabels();
    setTimeout(initRipples, 50);
}

function openCalc(k, exName, currentStoredKg) {
    calcState.activeKey = k;

    // ─── LÓGICA DE MEMORIA VISUAL ───
    const savedData = sessionState[k] || {};
    // Si hay discos/pesos guardados, los clonamos. Si no, iniciamos en blanco.
    const _defaultBar = globalUnit === 'kg' ? 20 : 45;
    const _validBars = globalUnit === 'kg' ? [20, 15, 10] : [45, 25, 15];
    const _validPlates = globalUnit === 'kg' ? [20, 15, 10, 5, 2.5] : [45, 25, 10, 5, 2.5];
    const _savedBarW = savedData.barW || _defaultBar;
    calcState.barW = _validBars.includes(_savedBarW) ? _savedBarW : _defaultBar;
    calcState.plates = (savedData.plates || []).filter(p => _validPlates.includes(p));
    calcState.dumbW = savedData.dumbW || 0;
    calcState.machW = savedData.machW || 0;

    const nameLow = exName.toLowerCase();
    let initTab = 'barra';

    if (savedData.equip) {
        initTab = savedData.equip;
    } else if (nameLow.includes('db') || nameLow.includes('mancuerna') || nameLow.includes('lateral') || nameLow.includes('curl') || nameLow.includes('martillo') || nameLow.includes('inclinado')) {
        initTab = 'mancuernas';
    } else if (nameLow.includes('máquina') || nameLow.includes('maquina') || nameLow.includes('polea') || nameLow.includes('jalón') || nameLow.includes('prensa') || nameLow.includes('aductor')) {
        initTab = 'maquina';
    }

    buildDumbGrid();
    setCalcTab(initTab);

    // ─── RESTAURAR LA INTERFAZ ───
    setCalcBar(calcState.barW); // Selecciona la barra correcta
    if (calcState.dumbW > 0) setCalcDumb(calcState.dumbW); // Ilumina la mancuerna

    const machEl = document.getElementById('cmach-val');
    if (machEl) machEl.innerText = calcState.machW; // Restaura el número de la máquina

    document.getElementById('modal-calc').classList.add('show');
    setTimeout(initRipples, 100);
    updateCalcVisuals(); // Dibuja los discos guardados
}

function setCalcTab(t) {
    if (navigator.vibrate) navigator.vibrate([20]);
    calcState.tab = t;
    ['barra', 'mancuernas', 'maquina'].forEach(id => {
        const btn = document.getElementById(`ctab-${id}`);
        const view = document.getElementById(`cview-${id}`);
        if (!btn || !view) return;
        if (id === t) {
            btn.className = "flex-1 py-2.5 text-[11px] font-bold rounded-lg bg-white dark:bg-slate-700 shadow-sm transition-all ripple-btn text-slate-800 dark:text-white";
            view.classList.remove('hidden');
        } else {
            btn.className = "flex-1 py-2.5 text-[11px] font-bold rounded-lg text-slate-500 transition-all ripple-btn";
            view.classList.add('hidden');
        }
    });
    updateCalcVisuals();
}

function setCalcBar(w) {
    if (navigator.vibrate) navigator.vibrate([20]);
    calcState.barW = w;
    // Target dynamically-generated buttons via data attribute — no hardcoded IDs
    document.querySelectorAll('#calc-bar-selector button').forEach(btn => {
        const bw = parseFloat(btn.getAttribute('data-bar-w'));
        if (bw === w) {
            btn.classList.add('bg-pink-100', 'text-pink-600', 'border-pink-300', 'dark:bg-pink-900/40', 'dark:border-pink-500');
            btn.classList.remove('bg-slate-100', 'text-slate-500', 'border-slate-200', 'dark:bg-slate-700', 'dark:border-transparent', 'border-transparent');
        } else {
            btn.classList.remove('bg-pink-100', 'text-pink-600', 'border-pink-300', 'dark:bg-pink-900/40', 'dark:border-pink-500');
            btn.classList.add('bg-slate-100', 'text-slate-500', 'border-slate-200', 'dark:bg-slate-700', 'dark:border-transparent');
        }
    });
    updateCalcVisuals();
}

function addCalcPlate(w) { if (navigator.vibrate) navigator.vibrate([30]); calcState.plates.push(w); updateCalcVisuals(); }
function clearCalcPlates() { if (navigator.vibrate) navigator.vibrate([30]); calcState.plates = []; updateCalcVisuals(); }
function undoCalcPlate() { if (navigator.vibrate) navigator.vibrate([30]); calcState.plates.pop(); updateCalcVisuals(); }

function setCalcDumb(w) {
    if (navigator.vibrate) navigator.vibrate([20]);
    calcState.dumbW = w;
    document.querySelectorAll('.dumb-btn').forEach(btn => btn.classList.remove('border-pink-500', 'bg-pink-100', 'text-pink-600', 'dark:bg-pink-900/40', 'dark:text-pink-300'));
    const btnId = 'db-btn-' + String(w).replace('.', '_');
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.add('border-pink-500', 'bg-pink-100', 'text-pink-600', 'dark:bg-pink-900/40', 'dark:text-pink-300');
    updateCalcVisuals();
}

function stepCalcMach(step) {
    if (navigator.vibrate) navigator.vibrate([20]);
    calcState.machW = Math.max(0, calcState.machW + step);
    const el = document.getElementById('cmach-val');
    if (el) el.innerText = calcState.machW;
    updateCalcVisuals();
}

function updateCalcVisuals() {
    // ─── Plate visual props keyed by weight, unit-aware ───
    const plateMap = globalUnit === 'kg'
        ? { 20: ['h-12', 'bg-pink-500'], 15: ['h-10', 'bg-blue-500'], 10: ['h-8', 'bg-emerald-500'], 5: ['h-6', 'bg-amber-500'], 2.5: ['h-5', 'bg-purple-500'] }
        : { 45: ['h-12', 'bg-pink-500'], 25: ['h-10', 'bg-blue-500'], 10: ['h-8', 'bg-emerald-500'], 5: ['h-6', 'bg-amber-500'], 2.5: ['h-5', 'bg-purple-500'] };

    const cont = document.getElementById('calc-visual-plates');
    if (cont) {
        cont.innerHTML = calcState.plates.map(p => {
            const [h, color] = plateMap[p] || ['h-6', 'bg-slate-500'];
            return `<div class="w-2.5 rounded-sm ${h} ${color} border border-black/20 shadow-sm"></div>`;
        }).join('');
    }

    let displayValue = 0, kgEquivalent = 0, unitLabel = globalUnit, subText = '';
    const headerEl = document.getElementById('calc-header-label');

    if (calcState.tab === 'barra') {
        // Plates are in the current unit — no conversion needed for KG mode
        const total = calcState.barW + calcState.plates.reduce((acc, p) => acc + p * 2, 0);
        if (globalUnit === 'kg') {
            displayValue = Math.round(total * 10) / 10;
            kgEquivalent = displayValue;
            unitLabel = 'kg';
            subText = `≈ ${(displayValue * 2.20462).toFixed(1)} LBS`;
            if (headerEl) headerEl.innerText = 'Peso Total (KG)';
        } else {
            displayValue = Math.round(total * 10) / 10;
            kgEquivalent = Math.round((total / 2.20462) * 10) / 10;
            unitLabel = 'lbs';
            subText = `≈ ${kgEquivalent.toFixed(1)} KG`;
            if (headerEl) headerEl.innerText = 'Peso Total (LBS)';
        }
    } else if (calcState.tab === 'mancuernas') {
        displayValue = calcState.dumbW;
        kgEquivalent = globalUnit === 'lbs'
            ? Math.round((calcState.dumbW / 2.20462) * 10) / 10
            : calcState.dumbW;
        unitLabel = globalUnit;
        subText = `≈ ${kgEquivalent.toFixed(1)} KG`;
        if (headerEl) headerEl.innerText = `Peso por Mancuerna (${globalUnit.toUpperCase()})`;
    } else if (calcState.tab === 'maquina') {
        displayValue = calcState.machW;
        kgEquivalent = globalUnit === 'lbs'
            ? Math.round((calcState.machW / 2.20462) * 10) / 10
            : calcState.machW;
        unitLabel = globalUnit;
        subText = `≈ ${kgEquivalent.toFixed(1)} KG`;
        if (headerEl) headerEl.innerText = `Peso Máquina (${globalUnit.toUpperCase()})`;
    }

    const mainEl = document.getElementById('calc-total-main');
    const subEl = document.getElementById('calc-total-sub');
    const unitEl = document.getElementById('calc-total-unit-label');
    if (mainEl) mainEl.innerText = Number.isInteger(displayValue) ? displayValue : displayValue.toFixed(1);
    if (subEl) subEl.innerText = subText;
    if (unitEl) unitEl.innerText = unitLabel;
}

function submitCalc() {
    let totalBaseKg = 0;

    if (calcState.tab === 'barra') {
        const total = calcState.barW + calcState.plates.reduce((acc, p) => acc + p * 2, 0);
        // Barbell plates are now in the active unit — only convert when in LBS
        totalBaseKg = globalUnit === 'kg'
            ? Math.round(total * 10) / 10
            : Math.round((total / 2.20462) * 10) / 10;
    } else if (calcState.tab === 'mancuernas') {
        const raw = globalUnit === 'lbs' ? calcState.dumbW / 2.20462 : calcState.dumbW;
        totalBaseKg = Math.round(raw * 10) / 10;
    } else if (calcState.tab === 'maquina') {
        const raw = globalUnit === 'lbs' ? calcState.machW / 2.20462 : calcState.machW;
        totalBaseKg = Math.round(raw * 10) / 10;
    }

    const k = calcState.activeKey;

    if (totalBaseKg > 0) {
        persistInput(k, 'w', totalBaseKg);

        if (!sessionState[k]) sessionState[k] = { done: false, w: '', r: '' };
        sessionState[k].equip = calcState.tab;
        sessionState[k].plates = [...calcState.plates];
        sessionState[k].barW = calcState.barW;
        sessionState[k].dumbW = calcState.dumbW;
        sessionState[k].machW = calcState.machW;
        persistSession();

        // ─── Auto-cascade to empty sets below ───
        const parts = k.split('_');
        const d = parts[0], exI = parts[1];
        const isWarmup = String(parts[2]).startsWith('W');

        if (!isWarmup) {
            const currentSet = parseInt(parts[2]);
            const totalSets = ROUTINE[d].exercises[exI].sets;

            for (let nextSet = currentSet + 1; nextSet <= totalSets; nextSet++) {
                const nextKey = `${d}_${exI}_${nextSet}`;
                if (!sessionState[nextKey]) sessionState[nextKey] = { done: false, w: '', r: '' };

                if (sessionState[nextKey].w === '' || sessionState[nextKey].w === undefined) {
                    sessionState[nextKey].w = totalBaseKg;
                    sessionState[nextKey].equip = calcState.tab;
                    sessionState[nextKey].plates = [...calcState.plates];
                    sessionState[nextKey].barW = calcState.barW;
                    sessionState[nextKey].dumbW = calcState.dumbW;
                    sessionState[nextKey].machW = calcState.machW;

                    const nextRow = document.getElementById(`row-${nextKey}`);
                    if (nextRow) {
                        const nextWeightInput = nextRow.querySelector('.gym-input');
                        if (nextWeightInput) nextWeightInput.value = formatUnitDisplay(totalBaseKg);
                    }
                }
            }
        }
        persistSession();
    } else {
        persistInput(k, 'w', '');
    }

    document.getElementById('modal-calc').classList.remove('show');
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);

    const row = document.getElementById(`row-${k}`);
    if (row) {
        const weightInput = row.querySelector('.gym-input');
        if (weightInput) weightInput.value = totalBaseKg > 0 ? formatUnitDisplay(totalBaseKg) : '';
    }
}
/* ════════════════════════════════════════════════════
   FEATURE 1 & 2 HELPERS — REP RANGE PARSERS
════════════════════════════════════════════════════ */
function parseRepRangeTop(repStr) {
    if (!repStr) return 12;
    const parts = String(repStr).replace(/\s/g, '').split('-');
    return parseInt(parts[parts.length - 1]) || 12;
}
function parseRepRangeMid(repStr) {
    if (!repStr) return 10;
    const parts = String(repStr).replace(/\s/g, '').split('-');
    if (parts.length === 2) return Math.round((parseInt(parts[0]) + parseInt(parts[1])) / 2);
    return parseInt(parts[0]) || 10;
}

/* ════════════════════════════════════════════════════
   FEATURE 1 — SMOOTH BEZIER CHART ENGINE
════════════════════════════════════════════════════ */
function buildExerciseChartSVG(exName, currentSessionMax) {
    const pastSessions = [...historyState].reverse().filter(h => h.exLog && h.exLog[exName]);
    let chartPoints = pastSessions.map(h => parseFloat(h.exLog[exName].maxWeight) || 0);
    if (currentSessionMax > 0) chartPoints.push(currentSessionMax);
    chartPoints = chartPoints.slice(-8);

    // ─── EDGE CASE: Zero sessions ───
    if (chartPoints.length === 0) {
        return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
            height:130px;text-align:center;padding:0 20px">
            <div style="font-size:36px;margin-bottom:10px">🌱</div>
            <p style="font-weight:800;font-size:13px;color:var(--text-main);margin:0">Primera vez aquí</p>
            <p style="font-size:11px;color:var(--text-muted);margin:6px 0 0;line-height:1.6">
                Completa tu primera serie para iniciar el seguimiento de carga</p></div>`;
    }

    // ─── EDGE CASE: Single data point ───
    if (chartPoints.length === 1) {
        return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
            height:130px;text-align:center">
            <p style="font-size:10px;font-weight:800;color:var(--text-muted);margin:0 0 6px;
                text-transform:uppercase;letter-spacing:0.08em">Primera sesión</p>
            <p style="font-size:42px;font-weight:900;color:var(--pink);margin:0;
                font-family:'Poppins',sans-serif;line-height:1">${formatUnitDisplay(chartPoints[0])}</p>
            <p style="font-size:11px;font-weight:700;color:var(--text-muted);margin:4px 0 0">
                ${globalUnit.toUpperCase()}</p>
            <p style="font-size:10px;color:var(--text-muted);margin:12px 0 0">
                Una sesión más para ver tu gráfica 📈</p></div>`;
    }

    // ─── TREND BADGE ───
    const last = chartPoints[chartPoints.length - 1];
    const prev = chartPoints[chartPoints.length - 2];
    const diff = parseFloat((last - prev).toFixed(2));
    const pr = prState[exName] ? parseFloat(prState[exName]) : 0;
    const isNewPR = currentSessionMax > 0 && pr > 0 && Math.abs(currentSessionMax - pr) < 0.01;
    const isDark = document.documentElement.classList.contains('dark');

    let trendStyle, trendText;
    if (isNewPR) {
        trendStyle = 'background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;';
        trendText = '🥇 ¡Nuevo Récord Personal!';
    } else if (diff > 0.01) {
        trendStyle = `background:${isDark ? 'rgba(52,211,153,0.15)' : 'rgba(16,185,129,0.1)'};
                      color:${isDark ? '#34d399' : '#065f46'};`;
        trendText = `▲ +${formatUnitDisplay(Math.abs(diff))} ${globalUnit.toUpperCase()} vs sesión anterior`;
    } else if (diff < -0.01) {
        trendStyle = `background:${isDark ? 'rgba(248,113,113,0.15)' : 'rgba(239,68,68,0.08)'};
                      color:${isDark ? '#f87171' : '#991b1b'};`;
        trendText = `▼ −${formatUnitDisplay(Math.abs(diff))} ${globalUnit.toUpperCase()} vs sesión anterior`;
    } else {
        trendStyle = 'background:var(--slate-100);color:var(--text-muted);';
        trendText = '→ Sin cambio vs sesión anterior';
    }
    const trendBadge = `<span style="${trendStyle}display:inline-block;padding:4px 12px;
        border-radius:20px;font-size:10px;font-weight:900;letter-spacing:0.03em">${trendText}</span>`;

    // ─── SMOOTH BEZIER CURVE (Cardinal-to-Cubic conversion) ───
    const W = 280, H = 90, PX = 18, PY = 22;
    const maxW = Math.max(...chartPoints);
    const minW = Math.min(...chartPoints);
    const padding = Math.max((maxW - minW) * 0.15, maxW * 0.05, 2);
    const rMin = minW - padding;
    const rMax = maxW + padding;
    const range = rMax - rMin || 1;

    const pts = chartPoints.map((val, idx) => ({
        x: PX + (idx / (chartPoints.length - 1)) * (W - PX * 2),
        y: PY + (1 - (val - rMin) / range) * (H - PY * 2),
        val, idx
    }));

    const T = 0.35; // Cardinal tension
    let linePath = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[Math.min(pts.length - 1, i + 2)];
        const cp1x = (p1.x + (p2.x - p0.x) * T).toFixed(1);
        const cp1y = (p1.y + (p2.y - p0.y) * T).toFixed(1);
        const cp2x = (p2.x - (p3.x - p1.x) * T).toFixed(1);
        const cp2y = (p2.y - (p3.y - p1.y) * T).toFixed(1);
        linePath += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }

    const gradId = `exGrad_${exName.replace(/[^a-zA-Z0-9]/g, '')}`;
    const areaPath = `${linePath} L ${pts[pts.length - 1].x.toFixed(1)},${H} L ${pts[0].x.toFixed(1)},${H} Z`;

    // Smart label set: first point, last point, and peak (if different)
    const peakIdx = chartPoints.indexOf(maxW);
    const labelIdxs = new Set([0, chartPoints.length - 1]);
    if (peakIdx !== 0 && peakIdx !== chartPoints.length - 1) labelIdxs.add(peakIdx);

    const dotsHtml = pts.map((p, i) => {
        const isLast = i === pts.length - 1;
        const isPeak = i === peakIdx;
        const r = (isLast || isPeak) ? 5 : 3.5;
        const fill = isLast ? 'var(--pink)' : isPeak ? '#f59e0b' : 'var(--card)';
        const stroke = isLast ? 'var(--pink)' : isPeak ? '#f59e0b' : 'rgba(255,77,148,0.55)';
        return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}"
            fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;
    }).join('');

    const labelsHtml = pts.filter((_, i) => labelIdxs.has(i)).map(p => {
        const isLast = p.idx === pts.length - 1;
        const isPeak = p.idx === peakIdx;
        const fill = isLast ? 'var(--pink)' : isPeak ? '#f59e0b' : 'var(--text-muted)';
        return `<text x="${p.x.toFixed(1)}" y="${(p.y - 11).toFixed(1)}" fill="${fill}"
            font-size="9" font-weight="800" text-anchor="middle"
            font-family="Poppins,sans-serif">${formatUnitDisplay(p.val)}</text>`;
    }).join('');

    const firstDate = pastSessions[0]?.date || '';
    const lastDate = currentSessionMax > 0 ? 'Hoy' : (pastSessions[pastSessions.length - 1]?.date || '');
    const totalRecs = pastSessions.length + (currentSessionMax > 0 ? 1 : 0);

    return `
        <div style="margin-bottom:12px">${trendBadge}</div>
        <svg viewBox="0 0 ${W} ${H}" width="100%" style="overflow:visible;display:block">
            <defs>
                <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stop-color="var(--pink)" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="var(--pink)" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <path d="${areaPath}" fill="url(#${gradId})" stroke="none"/>
            <path d="${linePath}" fill="none" stroke="var(--pink)" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
            ${dotsHtml}${labelsHtml}
        </svg>
        <div style="display:flex;justify-content:space-between;padding:6px ${PX}px 0">
            <span style="font-size:9px;font-weight:700;color:var(--text-muted)">${firstDate}</span>
            <span style="font-size:9px;font-weight:800;color:var(--pink)">${totalRecs} registros</span>
            <span style="font-size:9px;font-weight:700;color:var(--text-muted)">${lastDate}</span>
        </div>`;
}

/* ─── FEATURE 1: Exercise Stats Modal (called by 📊 button) ─── */
function showExerciseStats(exName) {
    // Find max weight in current open session for this exercise
    let currentMax = 0;
    for (const k in sessionState) {
        if (!sessionState[k].done) continue;
        const parts = k.split('_');
        const d = parts[0], i = parts[1];
        if (ROUTINE[d]?.exercises[i]?.name === exName) {
            const w = parseFloat(sessionState[k].w) || 0;
            if (w > currentMax) currentMax = w;
        }
    }

    const pr = prState[exName] ? parseFloat(prState[exName]) : 0;
    const sessionsWithEx = historyState.filter(h => h.exLog && h.exLog[exName]);
    const sessionsCount = sessionsWithEx.length;
    const chartHTML = buildExerciseChartSVG(exName, currentMax);

    // Total volume for this exercise across all history
    const totalVolKg = sessionsWithEx.reduce((sum, h) => {
        const ex = h.exLog[exName];
        if (!ex) return sum;
        if (ex.setsData?.length) return sum + ex.setsData.reduce((s, set) => s + (set.w || 0) * (set.r || 0), 0);
        return sum + (ex.maxWeight || 0) * (ex.completedSets || 3) * parseRepRangeMid(ex.repRange || '10');
    }, 0);
    const volDisp = totalVolKg > 9999
        ? (globalUnit === 'lbs' ? (totalVolKg * 2.20462 / 1000).toFixed(1) + 'k' : (totalVolKg / 1000).toFixed(1) + 'k')
        : formatUnitDisplay(totalVolKg);

    // Build or reuse the dynamic modal DOM node (only created once)
    let modal = document.getElementById('modal-ex-stats');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-ex-stats';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content" style="max-height:88vh;overflow-y:auto">
                <div class="modal-handle"></div>
                <div id="ex-stats-body"></div>
            </div>`;
        modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });
        document.body.appendChild(modal);
    }

    document.getElementById('ex-stats-body').innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px">
            <div>
                <h2 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:18px;
                    margin:0;color:var(--text-main);line-height:1.25">${exName}</h2>
                <p style="font-size:11px;color:var(--text-muted);margin:5px 0 0;font-weight:600">
                    ${sessionsCount} sesión${sessionsCount !== 1 ? 'es' : ''} · ${volDisp} ${globalUnit.toUpperCase()} vol. total</p>
            </div>
            <button onclick="document.getElementById('modal-ex-stats').classList.remove('show')"
                style="width:34px;height:34px;border-radius:50%;background:var(--slate-100);
                    border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;
                    justify-content:center;color:var(--text-muted);flex-shrink:0"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        ${pr > 0 ? `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
            <div style="background:linear-gradient(135deg,rgba(245,158,11,0.12),rgba(217,119,6,0.07));
                border:1px solid rgba(245,158,11,0.25);border-radius:18px;padding:16px;text-align:center">
                <p style="font-size:9px;font-weight:800;color:#b45309;text-transform:uppercase;
                    letter-spacing:0.07em;margin:0 0 6px"><i data-lucide="award" class="w-3 h-3 inline-block" style="margin-top:-2px;margin-right:2px"></i> Récord Personal</p>
                <p style="font-size:28px;font-weight:900;color:#b45309;margin:0;
                    font-family:'Poppins',sans-serif;line-height:1">${formatUnitDisplay(pr)}</p>
                <p style="font-size:10px;font-weight:700;color:#d97706;margin:3px 0 0">
                    ${globalUnit.toUpperCase()}</p>
            </div>
            <div style="background:var(--pink-light);border:1px solid var(--pink-border);
                border-radius:18px;padding:16px;text-align:center">
                <p style="font-size:9px;font-weight:800;color:var(--pink-dark);text-transform:uppercase;
                    letter-spacing:0.07em;margin:0 0 6px"><i data-lucide="calendar" class="w-3 h-3 inline-block" style="margin-top:-2px;margin-right:2px"></i> Sesiones</p>
                <p style="font-size:28px;font-weight:900;color:var(--pink-dark);margin:0;
                    font-family:'Poppins',sans-serif;line-height:1">${sessionsCount}</p>
                <p style="font-size:10px;font-weight:700;color:var(--pink-dark);margin:3px 0 0">totales</p>
            </div>
        </div>` : ''}
        <div style="background:var(--slate-100);border-radius:20px;padding:16px">
            <p style="font-size:9px;font-weight:800;color:var(--text-muted);text-transform:uppercase;
                letter-spacing:0.07em;margin:0 0 14px">Progreso de Carga Histórico</p>
            ${chartHTML}
        </div>`;

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    modal.classList.add('show');
    if (navigator.vibrate) navigator.vibrate([15]);
}

/* ════════════════════════════════════════════════════
   FEATURE 2 — PROGRESSIVE OVERLOAD PREFILL ENGINE
════════════════════════════════════════════════════ */
function getSmartPrefill(d) {
    const dayLabel = ROUTINE[d].label;
    // Match by stored dayKey (new sessions) OR by day label (legacy sessions)
    const lastSession = historyState.find(h =>
        String(h.dayKey) === String(d) || h.day === dayLabel
    );
    if (!lastSession?.exLog) return null;

    const prefillMap = {};
    ROUTINE[d].exercises.forEach((ex, exI) => {
        const hist = lastSession.exLog[ex.name];
        if (!hist?.maxWeight) return;

        const repTop = parseRepRangeTop(hist.repRange || ex.reps);
        const completedAll = (hist.completedSets || 0) >= (hist.totalSets || ex.sets);
        const hitTopReps = (hist.maxReps || 0) >= repTop;
        const shouldOverload = completedAll && hitTopReps;
        const increment = globalUnit === 'lbs' ? 5 : 2.5;

        prefillMap[exI] = {
            baseWeight: hist.maxWeight,
            suggestedWeight: shouldOverload ? hist.maxWeight + increment : hist.maxWeight,
            maxReps: hist.maxReps || parseRepRangeMid(ex.reps),
            shouldOverload,
            increment,
            setsData: hist.setsData || [],
            repRange: hist.repRange || ex.reps
        };
    });

    return Object.keys(prefillMap).length > 0 ? prefillMap : null;
}

function applySmartPrefill(d) {
    const prefill = getSmartPrefill(d);
    if (!prefill) return false;

    ROUTINE[d].exercises.forEach((ex, exI) => {
        const p = prefill[exI];
        if (!p) return;
        for (let s = 1; s <= ex.sets; s++) {
            const k = `${d}_${exI}_${s}`;
            if (!sessionState[k]) sessionState[k] = { done: false, w: '', r: '' };
            // Set 1 with overload → bumped weight. Others → per-set data or base weight.
            const prevSet = p.setsData[s - 1];
            sessionState[k].w = (s === 1 && p.shouldOverload)
                ? p.suggestedWeight
                : (prevSet?.w || p.baseWeight);
            sessionState[k].r = String(prevSet?.r || p.maxReps);
            sessionState[k].prefilled = true;
            if (s === 1 && p.shouldOverload) sessionState[k].overloadSuggested = true;
        }
    });

    window._activePrefill = prefill;
    persistSession();
    return true;
}

/* ─── CIRCULAR TIMER ─── */
function updateTimerRing() {
    const ring = document.getElementById('timer-ring');
    const pct = timeLeft / timerDuration;
    ring.style.strokeDashoffset = TIMER_CIRCUMFERENCE * (1 - pct);
    ring.style.stroke = pct > 0.5 ? 'var(--pink)' : pct > 0.25 ? '#f59e0b' : '#ef4444';
}
function setTimerPreset(s) {
    if (s < 150) s = 150; // Mínimo 2:30
    if (s > 300) s = 300; // Máximo 5:00
    timerDuration = s;
    ['150', '210', '300'].forEach(p => {
        const btn = document.getElementById(`preset-${p}`);
        if (btn) btn.classList.toggle('active', parseInt(p) === s);
    });
    resetTimer();

}
function renderTimerDisplay() {
    const m = Math.floor(timeLeft / 60), sec = timeLeft % 60;
    // Esto pondrá 2:30, 5:00, etc.
    document.getElementById('timer-display').innerText = `${m}:${sec < 10 ? '0' : ''}${sec}`;
    updateTimerRing();
}
// ─── LÓGICA DE LAS RUEDAS ESTILO iOS ───
let activeWheelItems = { min: null, sec: null };

// 1. Dibuja los números del 00 al 59
function initTimerWheel() {
    const minCol = document.getElementById('wheel-min');
    const secCol = document.getElementById('wheel-sec');
    if (!minCol || !secCol) return;

    let html = '<div style="height: 40px"></div>'; // Padding top
    for (let i = 0; i < 60; i++) {
        const val = i < 10 ? '0' + i : i;
        html += `<div class="wheel-item" data-val="${i}">${val}</div>`;
    }
    html += '<div style="height: 40px"></div>'; // Padding bottom

    minCol.innerHTML = html;
    secCol.innerHTML = html;

    setWheelToTime(Math.floor(timerDuration / 60), timerDuration % 60);
}

// 2. Física y vibración al girar
function handleWheelScroll(type) {
    const col = document.getElementById(`wheel-${type}`);
    const items = col.querySelectorAll('.wheel-item');
    const colCenter = col.getBoundingClientRect().top + col.clientHeight / 2;

    let closest = null;
    let minDiff = Infinity;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const diff = Math.abs(itemCenter - colCenter);
        if (diff < minDiff) { minDiff = diff; closest = item; }
    });

    if (closest && activeWheelItems[type] !== closest) {
        if (activeWheelItems[type]) activeWheelItems[type].classList.remove('selected', 'text-pink-400');
        closest.classList.add('selected', 'text-pink-400');
        activeWheelItems[type] = closest;

        if (navigator.vibrate) navigator.vibrate([5]); // ¡Click mecánico!

        clearTimeout(col.wheelTimeout);
        col.wheelTimeout = setTimeout(updateDurationFromWheel, 100);
    }
}

// 3. Guarda el valor cuando se detiene la rueda
function updateDurationFromWheel() {
    if (isRunning) return;
    const m = parseInt(activeWheelItems.min.getAttribute('data-val'));
    const s = parseInt(activeWheelItems.sec.getAttribute('data-val'));

    timerDuration = (m * 60) + s;
    if (timerDuration === 0) timerDuration = 5; // Evitamos timers de 0s
    timeLeft = timerDuration;
    renderTimerDisplay();
}

function setWheelToTime(m, s) {
    document.getElementById('wheel-min').scrollTop = m * 40;
    document.getElementById('wheel-sec').scrollTop = s * 40;
    handleWheelScroll('min'); handleWheelScroll('sec');
}

// 4. Iniciar/Pausar (Transición Ruedas <-> Texto)
let _timerColapseTimeout = null;
let _timerDebounce = false;

function toggleTimer() {
    if (_timerDebounce) return;
    _timerDebounce = true;
    setTimeout(() => _timerDebounce = false, 300);

    const btn = document.getElementById('timer-btn');
    const btnBig = document.getElementById('timer-btn-big');
    const editMode = document.getElementById('timer-edit-mode');
    const runMode = document.getElementById('timer-run-mode');

    if (isRunning) {
        clearInterval(timerId); isRunning = false;
        btn.innerText = 'Continuar sesión ➤'; btnBig.innerText = 'Continuar descanso ➤';
        toggleFocusMode(false);
        if (_timerColapseTimeout) { clearTimeout(_timerColapseTimeout); _timerColapseTimeout = null; }
    } else {
        if (timeLeft <= 0) timeLeft = timerDuration;
        isRunning = true;
        btn.innerText = 'Pausar'; btnBig.innerText = 'Pausar descanso';

        // Ocultar ruedas, mostrar texto
        editMode.style.display = 'none';
        runMode.classList.remove('hidden');

        toggleFocusMode(true);
        _timerColapseTimeout = setTimeout(() => {
            if (isRunning && typeof minimizeTimer === 'function') minimizeTimer();
        }, 3000);

        timerId = setInterval(() => {
            if (timeLeft > 0) { timeLeft--; renderTimerDisplay(); }
            else {
                clearInterval(timerId); isRunning = false;
                btn.innerText = 'Iniciar descanso'; btnBig.innerText = 'Iniciar descanso';
                if (typeof expandTimer === 'function') expandTimer();
                toggleFocusMode(false);
                resetTimer();
                showToast('¡Descanso terminado! A darle 💪');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerId); isRunning = false;
    timeLeft = timerDuration; renderTimerDisplay();
    document.getElementById('timer-btn').innerText = 'Iniciar descanso';
    document.getElementById('timer-btn-big').innerText = 'Iniciar descanso';
    if (typeof expandTimer === 'function') expandTimer();
    toggleFocusMode(false);

    // Volver a mostrar ruedas
    document.getElementById('timer-edit-mode').style.display = 'flex';
    document.getElementById('timer-run-mode').classList.add('hidden');
    setWheelToTime(Math.floor(timerDuration / 60), timerDuration % 60);
}

// 🔥 INICIALIZACIÓN: Agrega esta línea justo al cargar la app:
setTimeout(initTimerWheel, 200);
function startTimer() { clearInterval(timerId); timeLeft = timerDuration; renderTimerDisplay(); isRunning = false; toggleTimer(); }

// Nuevas funciones del Timer Expandible
function expandTimer() { 
    if (_timerDebounce) return;
    _timerDebounce = true;
    setTimeout(() => _timerDebounce = false, 300);
    const tb = document.getElementById('bottom-timer-bar');
    if (tb) {
        tb.classList.remove('timer-collapsed');
        tb.classList.remove('hidden-bar');
        tb.classList.add('expanded');
    }
    if (typeof toggleFocusMode === 'function') toggleFocusMode(false);
}
function minimizeTimer() { 
    if (_timerDebounce) return;
    _timerDebounce = true;
    setTimeout(() => _timerDebounce = false, 300);
    const tb = document.getElementById('bottom-timer-bar');
    if (tb) {
        tb.classList.remove('expanded'); 
        if (isRunning) {
            tb.classList.add('timer-collapsed');
        }
    }
}


// Para actualizar ambos textos y anillos a la vez
function updateTimerRing() {
    const pct = 1 - timeLeft / timerDuration;
    const ringMini = document.getElementById('timer-ring-mini');
    const ringBig = document.getElementById('timer-ring-big');
    if (ringMini) ringMini.style.strokeDashoffset = 213.6 * pct;
    if (ringBig) ringBig.style.strokeDashoffset = 226 * pct;
}
function renderTimerDisplay() {
    const m = Math.floor(timeLeft / 60), sec = timeLeft % 60;
    const txt = `${m}:${sec < 10 ? '0' : ''}${sec}`;
    document.getElementById('timer-display').innerText = txt;
    document.getElementById('timer-display-big').innerText = txt;
    updateTimerRing();
}

// Gesto para cerrar deslizando hacia abajo
let timerTouchY = 0;
const timerBarEl = document.getElementById('bottom-timer-bar');
timerBarEl.addEventListener('touchstart', e => { timerTouchY = e.touches[0].clientY; }, { passive: true });
timerBarEl.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientY - timerTouchY > 80) minimizeTimer();
}, { passive: true });

/* ─── HISTORIAL Y GUARDADO ─── */
function openSaveModal() {
    const sets = Object.values(sessionState).filter(s => s.done).length;
    const vol = calcSessionVolume();
    const xpEarned = XP_PER_WORKOUT + (sets * 2);
    document.getElementById('summary-sets').innerText = sets;
    document.getElementById('summary-vol').innerText = `${formatUnitDisplay(vol)} ${globalUnit.toUpperCase()}`;
    document.getElementById('summary-xp').innerText = '+' + xpEarned;
    document.getElementById('modal-summary').classList.add('show');
}

function saveToHistory() {
    // 🛡️ Guard: ensure historyState is always a valid array (never null/corrupted)
    if (!Array.isArray(historyState)) historyState = [];

    updateStreak();
    const setsCount = Object.values(sessionState).filter(s => s.done).length;
    const volume = calcSessionVolume();
    const xpEarned = XP_PER_WORKOUT + (setsCount * 2);

    // ─── BUILD ENHANCED EXERCISE LOG (ordered setsData, full metrics) ───
    const exData = {};
    const exSetsByNum = {}; // Buffer for ordered per-set data

    for (let k in sessionState) {
        if (!sessionState[k].done) continue;
        const parts = k.split('_');
        const [d, exI, setId] = parts;
        if (String(setId).startsWith('W')) continue; // Exclude warmup sets
        if (!ROUTINE[d]?.exercises[exI]) continue;

        const exName = ROUTINE[d].exercises[exI].name;
        const w = parseFloat(sessionState[k].w) || 0;
        const r = parseFloat(sessionState[k].r) || 0;
        const setNum = parseInt(setId);

        if (!exData[exName]) {
            exData[exName] = {
                maxWeight: 0,
                maxReps: 0,
                completedSets: 0,
                totalSets: ROUTINE[d].exercises[exI].sets,
                repRange: ROUTINE[d].exercises[exI].reps,
                setsData: []
            };
            exSetsByNum[exName] = {};
        }

        exData[exName].completedSets++;
        if (w > exData[exName].maxWeight) exData[exName].maxWeight = w;
        if (r > exData[exName].maxReps) exData[exName].maxReps = r;
        exSetsByNum[exName][setNum] = { w, r };

        categorizeAndAddStats(exName, 1);
    }

    // Sort setsData by set number so prefill index-matches correctly
    for (const exName in exSetsByNum) {
        exData[exName].setsData = Object.keys(exSetsByNum[exName])
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(n => exSetsByNum[exName][n]);
    }

    historyState.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }),
        dateRaw: new Date().toDateString(),
        day: ROUTINE[currentDay].label,
        dayKey: currentDay,          // ← NEW: used by applySmartPrefill for accurate matching
        icon: ROUTINE[currentDay].icon,
        sets: setsCount,
        volume,
        exLog: exData
    });

    achState.stats.workouts++;

    localStorage.setItem(HISTORY_KEY, JSON.stringify(historyState));
    sessionState = {};
    window._activePrefill = null;
    persistSession();
    checkActiveSession();

    document.getElementById('modal-summary').classList.remove('show');
    renderHistory();
    renderDay(currentDay);
    updateHomeStats();
    renderHeatmap();
    addXP(xpEarned);
    checkAchievements();

    setTimeout(launchConfetti, 100);
    checkAchievements();
    setView('history');
    showToast('¡Rutina guardada! 🌸 +' + xpEarned + ' XP');
}

function renderHistory() {
    const cont = document.getElementById('history-container');
    const count = historyState.length;
    document.getElementById('history-subtitle').innerText =
        count === 0 ? 'Aún no hay sesiones' : `${count} sesión${count !== 1 ? 'es' : ''} registrada${count !== 1 ? 's' : ''}`;

    renderProgressChart();

    if (count === 0) {
        cont.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 text-center">
                <div class="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center mb-5">
                    <i data-lucide="folder-open" class="w-10 h-10 text-slate-300 dark:text-slate-600"></i>
                </div>
                <h3 class="text-base font-bold text-frost-900 dark:text-white mb-2">Sin sesiones aún</h3>
                <p class="text-sm text-secondary max-w-xs leading-relaxed">Completa tu primer entrenamiento y verás tu progreso aquí. ¡Tú puedes, Valeria!</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    cont.innerHTML = historyState.map((s, idx) => `
        <div class="bg-white dark:bg-[#2C2C2E] rounded-[20px] p-5 shadow-sm border border-frost-100 dark:border-[#3A3A3C] flex items-center justify-between gap-4 relative" style="animation-delay:${idx * 60}ms">
            <div class="flex items-center gap-3 flex-1">
                <div class="w-12 h-12 rounded-[14px] bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-500 flex-shrink-0">${renderIcon(s.icon, 'w-6 h-6')}</div>
                <div class="flex-1 min-w-0">
                    <p class="font-bold text-sm text-frost-900 dark:text-white">${s.day || '—'}</p>
                    <p class="text-[11px] text-secondary font-600 uppercase tracking-wide mt-1">${s.date || ''}</p>
                </div>
            </div>
            <div class="text-right flex-shrink-0">
                <p class="text-xs font-black text-rose-500">${s.sets || 0}</p>
                <p class="text-[10px] text-secondary font-600 uppercase mt-0.5">Series</p>
                ${s.volume != null && s.volume !== '' ? `<p class="text-[10px] font-bold text-success mt-1">${formatUnitDisplay(s.volume)} ${globalUnit.toUpperCase()}</p>` : ''}
            </div>
            <button onclick="deleteHistoryEntry(${s.id})" class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/20 rounded-[10px] active:scale-90 transition-all" title="Eliminar sesión">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>`).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function deleteHistoryEntry(id) {
    if (!confirm('¿Seguro que deseas eliminar este entrenamiento? Se restará del volumen total de tu inicio.')) return;

    const index = historyState.findIndex(h => h.id === id);
    if (index > -1) {
        historyState.splice(index, 1);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(historyState));

        renderHistory();
        updateHomeStats();
        renderHeatmap();
        showToast('Entrenamiento eliminado 🗑️');
    }
}
function confirmReset() {
    if (confirm('¿Segura que quieres borrar el progreso de hoy?')) {
        sessionState = {};
        persistSession();
        checkActiveSession();
        renderDay(currentDay);
        setView('home');
        showToast('Sesión reiniciada 🧹');
    }
}

function cancelWorkoutRoutine() {
    if (!confirm('¿Seguro que deseas cancelar esta sesión? Perderás el progreso no guardado.')) return;
    sessionState = {};
    window._activePrefill = null;
    persistSession();
    if (typeof checkActiveSession === 'function') checkActiveSession();
    if (typeof showActiveWorkoutZone === 'function') showActiveWorkoutZone(false);
    if (typeof renderWorkoutSelector === 'function') renderWorkoutSelector();
    if (typeof toggleFocusMode === 'function') toggleFocusMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ════════════════════════════════════════════════════
   EDITOR DE RUTINA
════════════════════════════════════════════════════ */
let editingDay = null;
let editingExDay = null;
let editingExIdx = null;
let emojiTargetDay = null;
let pendingIcon = null;

let _editorSortable = null;

// 32 curated Lucide icon names for fitness & habits
const ICON_OPTIONS = [
    'activity', 'flame', 'heart', 'target', 'zap', 'dumbbell', 'award', 'star',
    'sun', 'moon', 'calendar', 'clock', 'battery-charging', 'trending-up', 'bar-chart-2',
    'shield', 'anchor', 'crosshair', 'eye', 'feather', 'gift', 'globe', 'layers',
    'map-pin', 'maximize-2', 'music', 'navigation', 'send', 'sparkles', 'sunrise',
    'timer', 'trophy',
];

function renderEditor() {
    const cont = document.getElementById('editor-days-container');
    cont.innerHTML = Object.keys(ROUTINE).sort((a, b) => a - b).map(d => renderEditorDay(parseInt(d))).join('');
    initRipples();
    initEditorSortable();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initEditorSortable() {
    const el = document.getElementById('editor-days-container');
    if (!el || typeof Sortable === 'undefined') return;

    if (_editorSortable) { _editorSortable.destroy(); _editorSortable = null; }

    _editorSortable = Sortable.create(el, {
        animation: 180,
        handle: '.drag-handle',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        forceFallback: false,

        onEnd(evt) {
            if (evt.oldIndex === evt.newIndex) return;

            const newOrder = [...el.querySelectorAll('.editor-day-section')]
                .map(el => parseInt(el.getAttribute('data-day-key')));

            reorderRoutineDaysByArray(newOrder);
        }
    });
}

function reorderRoutineDaysByArray(newKeyOrder) {
    const newRoutine = {};
    const keyMap = {};

    newKeyOrder.forEach((oldKey, idx) => {
        const newKey = idx + 1;
        newRoutine[newKey] = ROUTINE[oldKey];
        keyMap[oldKey] = newKey;
    });

    const newSession = {};
    for (const k of Object.keys(sessionState)) {
        const parts = k.split('_');
        const oldDay = parseInt(parts[0]);
        if (keyMap[oldDay] !== undefined) {
            const newK = `${keyMap[oldDay]}_${parts[1]}_${parts[2]}`;
            newSession[newK] = sessionState[k];
        }
    }

    if (keyMap[currentDay] !== undefined) currentDay = keyMap[currentDay];
    if (editingDay !== null && keyMap[editingDay] !== undefined) editingDay = keyMap[editingDay];

    ROUTINE = newRoutine;
    sessionState = newSession;

    saveRoutine();
    persistSession();

    renderDayPills();
    renderWorkoutSelector();

    showToast('¡Días reordenados! ⠿');
    el_updateDayKeyAttributes();
}

function el_updateDayKeyAttributes() {
    const cont = document.getElementById('editor-days-container');
    if (!cont) return;
    const sections = cont.querySelectorAll('.editor-day-section');
    sections.forEach((el, idx) => {
        const newKey = idx + 1;
        el.setAttribute('data-day-key', newKey);
        el.id = `editor-day-${newKey}`;
        const dayLabel = el.querySelector('.day-key-label');
        if (dayLabel) dayLabel.innerText = `DÍA ${newKey}`;
    });
}

function renderEditorDay(d) {
    const day = ROUTINE[d];
    const isOpen = editingDay === d;
    const exList = day.exercises.map((ex, i) => `
        <div class="editor-ex-row" id="edrow-${d}-${i}">
            <div class="flex-1 min-w-0">
                <p class="font-bold text-sm text-frost-900 dark:text-white truncate">${ex.name}</p>
                <p class="text-[11px] text-secondary font-500 mt-1">${ex.sets}×${ex.reps}</p>
            </div>
            <div class="flex items-center gap-1.5 flex-shrink-0">
                <button onclick="moveExercise(${d},${i},-1)" class="ed-btn ed-btn-up ripple-btn" title="Subir">↑</button>
                <button onclick="moveExercise(${d},${i},1)"  class="ed-btn ed-btn-down ripple-btn" title="Bajar">↓</button>
                <button onclick="openEditExModal(${d},${i})" class="ed-btn ed-btn-edit ripple-btn" title="Editar">✏️</button>
                <button onclick="deleteExercise(${d},${i})"  class="ed-btn ed-btn-del ripple-btn" title="Eliminar">🗑️</button>
            </div>
        </div>`).join('');

    return `
    <div class="editor-day-section" id="editor-day-${d}" data-day-key="${d}">
        <div class="editor-day-header">
            <div class="drag-handle" title="Arrastrar para reordenar">⠿</div>
            <button class="w-10 h-10 rounded-[12px] bg-rose-50 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 flex-shrink-0 active:scale-90 transition-transform ripple-btn" onclick="openEmojiModal(${d})" title="Cambiar ícóno">${renderIcon(day.icon)}</button>
            <div class="flex-1 min-w-0">
                <p class="text-[10px] font-bold uppercase tracking-widest text-rose-500 day-key-label">Día ${d}</p>
                <input type="text" class="day-name-input block w-full text-base font-bold text-frost-900 dark:text-white mt-1 bg-transparent" value="${day.label}" onchange="updateDayLabel(${d}, this.value)" placeholder="Nombre del día">
            </div>
            <button onclick="toggleEditorDay(${d})" class="editor-day-toggle ripple-btn ${isOpen ? 'open' : ''}" id="editor-toggle-${d}">▼</button>
        </div>
        <div id="editor-exlist-${d}" style="${isOpen ? '' : 'display:none'}">
            ${exList}
            <button onclick="addExercise(${d})" class="w-full py-3 text-rose-600 dark:text-rose-400 font-bold text-sm border-t border-frost-100 dark:border-frost-800 active:bg-rose-50 dark:active:bg-rose-500/10 transition-colors ripple-btn flex items-center justify-center gap-2">
                <span style="font-size:18px">＋</span> Agregar Ejercicio
            </button>
        </div>
    </div>`;
}

function toggleEditorDay(d) {
    const list = document.getElementById(`editor-exlist-${d}`);
    const btn = document.getElementById(`editor-toggle-${d}`);
    const isHidden = list.style.display === 'none';
    list.style.display = isHidden ? '' : 'none';
    btn.classList.toggle('open', isHidden);
    editingDay = isHidden ? d : null;
}

function updateDayLabel(d, value) {
    ROUTINE[d].label = value.trim() || `Día ${d}`;
    saveRoutine();
    if (currentDay === d) document.getElementById('workout-title-disp').innerText = ROUTINE[d].label;
}

function openEmojiModal(d) {
    emojiTargetDay = d;
    pendingIcon = ROUTINE[d].icon;
    const grid = document.getElementById('emoji-grid-container');
    grid.innerHTML = ICON_OPTIONS.map((iconName, idx) => {
        const isSelected = iconName === pendingIcon;
        return `
            <button
                class="w-12 h-12 rounded-[12px] bg-frost-100 dark:bg-frost-800 flex items-center justify-center text-rose-500 transition-all ripple-btn ${isSelected ? 'ring-2 ring-rose-500 bg-rose-50 dark:bg-rose-500/20 scale-105' : 'hover:bg-frost-200 dark:hover:bg-frost-700'}"
                onclick="selectIcon(${idx})"
                title="${iconName}">
                <i data-lucide="${iconName}" class="w-5 h-5"></i>
            </button>`;
    }).join('');
    document.getElementById('modal-emoji').classList.add('show');
    initRipples();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function selectIcon(idx) {
    if (idx >= 0 && idx < ICON_OPTIONS.length) {
        pendingIcon = ICON_OPTIONS[idx];
    }
    document.querySelectorAll('#emoji-grid-container button').forEach((btn, i) => {
        btn.classList.toggle('ring-2', i === idx);
        btn.classList.toggle('ring-rose-500', i === idx);
        btn.classList.toggle('bg-rose-50', i === idx);
        btn.classList.toggle('scale-105', i === idx);
    });
}

function saveEmojiModal() {
    if (emojiTargetDay !== null && pendingIcon) {
        ROUTINE[emojiTargetDay].icon = pendingIcon;
        saveRoutine();
        renderEditor();
        showToast('Ícono actualizado ✨');
    }
    document.getElementById('modal-emoji').classList.remove('show');
    emojiTargetDay = null; pendingIcon = null;
}

/* ─── EDITAR EJERCICIO ─── */
function openEditExModal(d, i) {
    editingExDay = d; editingExIdx = i;
    const ex = ROUTINE[d].exercises[i];
    document.getElementById('ex-edit-name').value = ex.name || '';
    document.getElementById('ex-edit-sets').value = ex.sets || 3;
    document.getElementById('ex-edit-reps').value = ex.reps || '8-12';
    document.getElementById('ex-edit-tip').value = ex.tip || '';
    document.getElementById('ex-edit-details').value = ex.details || '';
    document.getElementById('ex-edit-gif').value = ex.gif || '';
    document.getElementById('ex-edit-gifVar').value = ex.gifVar || '';
    document.getElementById('modal-edit-ex').classList.add('show');
}
function closeEditExModal() {
    document.getElementById('modal-edit-ex').classList.remove('show');
    editingExDay = null; editingExIdx = null;
}
function saveEditExModal() {
    if (editingExDay === null || editingExIdx === null) return;
    const name = document.getElementById('ex-edit-name').value.trim();
    if (!name) { showToast('⚠️ El nombre no puede estar vacío'); return; }
    const ex = ROUTINE[editingExDay].exercises[editingExIdx];
    ex.name = name;
    ex.sets = Math.max(1, parseInt(document.getElementById('ex-edit-sets').value) || 3);
    ex.reps = document.getElementById('ex-edit-reps').value.trim() || '8-12';
    ex.tip = document.getElementById('ex-edit-tip').value.trim();
    ex.details = document.getElementById('ex-edit-details').value.trim();
    ex.gif = document.getElementById('ex-edit-gif').value.trim();
    ex.gifVar = document.getElementById('ex-edit-gifVar').value.trim();
    saveRoutine();
    closeEditExModal();
    renderEditor();
    playSound('save');
    showToast('¡Ejercicio actualizado, Valeria! ✨');
}

/* ─── AGREGAR / ELIMINAR EJERCICIO ─── */
function addExercise(d) {
    ROUTINE[d].exercises.push({ name: 'Nuevo Ejercicio', sets: 3, reps: '8-12', tip: 'Agrega un tip aquí.', details: 'Descripción técnica del ejercicio.', gif: '', gifVar: '' });
    saveRoutine();
    editingDay = d;
    renderEditor();
    const newIdx = ROUTINE[d].exercises.length - 1;
    setTimeout(() => openEditExModal(d, newIdx), 200);
    showToast('Ejercicio agregado ➕');
}
function deleteExercise(d, i) {
    if (ROUTINE[d].exercises.length <= 1) { showToast('⚠️ Debe haber al menos un ejercicio por día'); return; }
    if (!confirm(`¿Eliminar "${ROUTINE[d].exercises[i].name}"?`)) return;
    ROUTINE[d].exercises.splice(i, 1);
    saveRoutine();
    editingDay = d;
    renderEditor();
    showToast('Ejercicio eliminado 🗑️');
}

function moveExercise(d, i, direction) {
    const arr = ROUTINE[d].exercises;
    const newIdx = i + direction;
    if (newIdx < 0 || newIdx >= arr.length) return;

    [arr[i], arr[newIdx]] = [arr[newIdx], arr[i]];

    const swapKeys = (dayK, posA, posB) => {
        const maxSets = Math.max(
            ROUTINE[dayK]?.exercises[posA]?.sets || 0,
            ROUTINE[dayK]?.exercises[posB]?.sets || 0,
            10
        );
        for (let s = 1; s <= maxSets; s++) {
            const kA = `${dayK}_${posA}_${s}`;
            const kB = `${dayK}_${posB}_${s}`;
            const tmpA = sessionState[kA];
            const tmpB = sessionState[kB];
            if (tmpB !== undefined) sessionState[kA] = tmpB; else delete sessionState[kA];
            if (tmpA !== undefined) sessionState[kB] = tmpA; else delete sessionState[kB];
        }
    };
    swapKeys(d, i, newIdx);

    saveRoutine();
    persistSession();
    editingDay = d;
    renderEditor();
}

/* ─── RESET RUTINA ─── */
function confirmResetRoutine() {
    if (!confirm('¿Restaurar la rutina original? Todos tus cambios de ejercicios se perderán. Tu historial y PRs están seguros.')) return;
    ROUTINE = JSON.parse(JSON.stringify(DEFAULT_ROUTINE));
    saveRoutine();
    editingDay = null;
    renderEditor();
    renderWorkoutSelector();
    playSound('complete');
    showToast('¡Rutina restaurada al original! 🔄');
}

function getExCardBackHTML(exName, ex, d, i, rowsHtml) {
    let currentVol = 0;
    let completedSets = 0;
    let currentMax = 0;

    for (let s = 1; s <= ex.sets; s++) {
        const st = sessionState[`${d}_${i}_${s}`];
        if (st && st.done) {
            const w = parseFloat(st.w) || 0;
            const r = parseFloat(st.r) || 0;
            currentVol += w * r;
            completedSets++;
            if (w > currentMax) currentMax = w;
        }
    }

    const pastData = [...historyState].reverse().filter(h => h.exLog && h.exLog[exName]);
    let chartPoints = pastData.map(h => h.exLog[exName].maxWeight);
    if (currentMax > 0) chartPoints.push(currentMax);

    chartPoints = chartPoints.slice(-6);

    let chartHTML = '<div class="text-xs text-slate-400 font-medium">Guarda tu sesión hoy para ver tu gráfica 📈</div>';

    if (chartPoints.length > 0) {
        const maxW = Math.max(...chartPoints);
        const minW = Math.min(...chartPoints) * 0.85;
        const range = (maxW - minW) || 1;

        const W = 260, H = 85, PX = 15, PY = 25;

        let polylinePts = '';
        let circlesHtml = '';
        let textHtml = '';

        if (chartPoints.length === 1) {
            polylinePts = `${W / 2},${H / 2}`;
            circlesHtml = `<circle cx="${W / 2}" cy="${H / 2}" r="5" fill="var(--card)" stroke="var(--pink)" stroke-width="2.5"/>`;
            textHtml = `<text x="${W / 2}" y="${H / 2 - 12}" fill="var(--text-muted)" font-size="10" font-weight="900" text-anchor="middle" font-family="Poppins">${formatUnitDisplay(chartPoints[0])}</text>`;
        } else {
            polylinePts = chartPoints.map((val, idx) => {
                const x = PX + (idx / (chartPoints.length - 1)) * (W - PX * 2);
                const y = H - PY - ((val - minW) / range) * (H - PY * 2);
                return `${x},${y}`;
            }).join(' ');

            chartPoints.forEach((val, idx) => {
                const x = PX + (idx / (chartPoints.length - 1)) * (W - PX * 2);
                const y = H - PY - ((val - minW) / range) * (H - PY * 2);

                circlesHtml += `<circle cx="${x}" cy="${y}" r="4.5" fill="var(--card)" stroke="var(--pink)" stroke-width="2.5"/>`;

                textHtml += `<text x="${x}" y="${y - 10}" fill="var(--text-muted)" font-size="9" font-weight="800" text-anchor="middle" font-family="Poppins">${formatUnitDisplay(val)}</text>`;
            });
        }

        const maxY = H - PY - ((maxW - minW) / range) * (H - PY * 2);
        const gridHtml = `<line x1="${PX}" y1="${maxY}" x2="${W - PX}" y2="${maxY}" stroke="var(--pink-border)" stroke-dasharray="4 4" stroke-width="1.5"/>`;

        chartHTML = `
            <svg viewBox="0 0 ${W} ${H}" class="w-full h-full overflow-visible">
                ${gridHtml}
                <polyline fill="none" stroke="var(--pink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${polylinePts}"/>
                ${circlesHtml}
                ${textHtml}
            </svg>`;
    }

    const pr = prState[exName] ? parseFloat(prState[exName]) : 0;
    const prDisp = pr ? formatUnitDisplay(pr) + ' ' + globalUnit.toUpperCase() : 'Aún sin PR';
    const volDisp = currentVol > 0 ? formatUnitDisplay(currentVol) + ' ' + globalUnit.toUpperCase() : '0 ' + globalUnit.toUpperCase();

    return `
        <div class="flip-container mb-4" id="card-${d}-${i}">
            <div class="flip-inner" id="flip-${d}_${i}">
                
                <div class="flip-face flip-front card p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex-1">
                            <div class="flex items-center gap-2">
                                <h3 class="font-bold text-sm text-slate-800 dark:text-white">${ex.name}</h3>
                                <span class="text-[10px] font-bold text-pink-500 bg-pink-100 dark:bg-pink-900/30 px-2 py-0.5 rounded">${ex.sets}×${ex.reps}</span>
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button onclick="toggleFlip(${d}, ${i})" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs opacity-70 active:scale-90 transition-all">📊</button>
                            <button onclick="toggleTips('${d}_${i}')" class="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-xs active:scale-90 transition-all">💡</button>
                        </div>
                    </div>

                    <div id="tips-${d}_${i}" class="coach-tips-panel">
                        ${ex.details}
                    </div>
                    
                    <div class="gif-container my-4">
                        <video src="${ex.gif}" class="gif-video" autoplay loop muted playsinline></video>
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <h4 class="text-[9px] font-black uppercase tracking-tighter text-slate-400">Progreso</h4>
                        <button onclick="addWarmup('${d}', ${i})" class="text-[9px] font-bold text-amber-500 bg-amber-100/20 px-2 py-1 rounded">+ Aproximación</button>
                    </div>
                    
                    <div class="h-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-4 overflow-hidden">
                        <div id="prog-bar-${d}-${i}" class="h-full bg-pink-500 transition-all" style="width:0%"></div>
                    </div>

                    <div class="space-y-2">${rowsHtml}</div>
                </div>

                <div class="flip-face flip-back card p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="font-bold text-sm text-pink-500">Historial: ${ex.name}</h3>
                        <button onclick="toggleFlip(${d}, ${i})" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs active:scale-90 transition-all">↩️</button>
                    </div>
                    
                    <div class="flex-1 flex flex-col items-center justify-center text-slate-400 text-xs text-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                        <span class="text-4xl mb-3">📈</span>
                        <p class="font-bold text-slate-500 dark:text-slate-300 mb-1">Centro de Datos</p>
                        <p>Aquí construiremos la gráfica de volumen y récords personales de Valeria.</p>
                    </div>
                </div>

            </div>
        </div>`;
}

function toggleFlip(d, i) {
    const card = document.getElementById(`card-${d}-${i}`);
    if (card) {
        card.classList.toggle('is-flipped');
        if (navigator.vibrate) navigator.vibrate([15]);
    }
}

document.getElementById('modal-summary').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });
document.getElementById('modal-edit-ex').addEventListener('click', function (e) { if (e.target === this) closeEditExModal(); });
document.getElementById('modal-emoji').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });
document.getElementById('modal-calc').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });

renderTimerDisplay();

/* ─── NAVEGACIÓN BOTTOM BAR ─── */
function navTo(view) {
    setView(view);
    // Quitar activo de todos los botones
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    // Poner activo al botón seleccionado
    const activeBtn = document.getElementById(`nav-btn-${view}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Pequeña vibración háptica al cambiar de pestaña
    if (navigator.vibrate) navigator.vibrate([10]);
    toggleFocusMode(false);
}

/* ─── FOCUS MODE (PROGRESSIVE DISCLOSURE) ─── */
let isFocusMode = false;
let navCollapseTimeout = null;

function toggleFocusMode(active) {
    if (isFocusMode === active) return;
    isFocusMode = active;

    const navBar = document.getElementById('bottom-nav-bar');
    
    if (active) {
        document.body.classList.add('focus-mode');
        if (navBar) navBar.classList.add('nav-collapsed');
    } else {
        document.body.classList.remove('focus-mode');
        if (navBar) navBar.classList.remove('nav-collapsed');
        if (navCollapseTimeout) { clearTimeout(navCollapseTimeout); navCollapseTimeout = null; }
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 150 && !isFocusMode && document.getElementById('view-workout') && !document.getElementById('view-workout').classList.contains('hidden')) {
        toggleFocusMode(true);
    }
    const tb = document.getElementById('bottom-timer-bar');
    if (tb && tb.classList.contains('expanded')) {
        minimizeTimer();
    }
}, { passive: true });

let focusSwipeStartY = 0;
document.addEventListener('touchstart', (e) => {
    if (e.touches[0].clientY > window.innerHeight * 0.8) {
        focusSwipeStartY = e.touches[0].clientY;
    } else {
        focusSwipeStartY = 0;
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (focusSwipeStartY && e.changedTouches[0].clientY - focusSwipeStartY < -30) {
        if (isFocusMode) {
            const navBar = document.getElementById('bottom-nav-bar');
            if (navBar && navBar.classList.contains('nav-collapsed')) {
                navBar.classList.remove('nav-collapsed');
                if (navCollapseTimeout) clearTimeout(navCollapseTimeout);
                navCollapseTimeout = setTimeout(() => {
                    if (isFocusMode) navBar.classList.add('nav-collapsed');
                }, 4000);
            }
        }
    }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById('bottom-nav-bar');
    if (navBar) {
        navBar.addEventListener('click', (e) => {
            if (navBar.classList.contains('nav-collapsed')) {
                // If they clicked an empty space, expand. 
                // If they clicked a button, navTo already handles it, but expanding visually is fine.
                navBar.classList.remove('nav-collapsed');
                if (navCollapseTimeout) clearTimeout(navCollapseTimeout);
                navCollapseTimeout = setTimeout(() => {
                    if (isFocusMode) navBar.classList.add('nav-collapsed');
                }, 4000);
            }
        });
    }
});
/* ─── GESTO UNIVERSAL: DESLIZAR HACIA ABAJO PARA CERRAR (VERTICAL) ─── */
let swipeStartY = 0;
let activeSheet = null;

document.addEventListener('touchstart', (e) => {
    const sheet = e.target.closest('.modal-content, .calc-sheet, .bottom-bar.expanded');
    const inWheelZone = !!e.target.closest('#timer-edit-mode');
    const isScrollable = !!e.target.closest('[style*="overflow-y"], .overflow-y-auto, .wheel-col, .wheel-picker-container');

    if (sheet && !inWheelZone && !isScrollable) {
        swipeStartY = e.touches[0].clientY;
        activeSheet = sheet;
        activeSheet.style.transition = 'none';
    } else {
        activeSheet = null;
    }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (!activeSheet) return;
    const currentY = e.touches[0].clientY;
    const diffY = currentY - swipeStartY;
    if (diffY > 0) activeSheet.style.transform = `translateY(${diffY}px)`;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (!activeSheet) return;
    const diffY = e.changedTouches[0].clientY - swipeStartY;

    activeSheet.style.transition = 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)';
    activeSheet.style.transform = '';

    if (diffY > 100) {
        if (activeSheet.classList.contains('bottom-bar')) minimizeTimer();
        else document.querySelectorAll('.modal-overlay.show, .calc-overlay.show').forEach(el => el.classList.remove('show'));
    }
    activeSheet = null;
}, { passive: true });

// ─── LÓGICA DEL SLIDER DE REPETICIONES ───
function openReps(k, currentVal) {
    currentRepsKey = k;
    const slider = document.getElementById('reps-slider');
    const display = document.getElementById('reps-display-big');

    const startVal = currentVal ? parseInt(currentVal) : 8;
    slider.value = startVal;
    display.innerText = startVal;

    document.getElementById('modal-reps').classList.add('show');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    if (navigator.vibrate) navigator.vibrate([15]);
}

function updateRepsDisplay(val) {
    document.getElementById('reps-display-big').innerText = val;
    if (navigator.vibrate) navigator.vibrate([10]); // Pequeña vibración al deslizar
}

function submitReps() {
    if (!currentRepsKey) return;
    const finalReps = document.getElementById('reps-slider').value;

    // 1. Guardar en la serie actual
    if (!sessionState[currentRepsKey]) sessionState[currentRepsKey] = { done: false, w: '', r: '' };
    sessionState[currentRepsKey].r = finalReps;

    // Actualizar vista de la celda actual (el índice [1] es el input de reps)
    const currentRow = document.getElementById(`row-${currentRepsKey}`);
    if (currentRow) currentRow.querySelectorAll('.gym-input')[1].value = finalReps;

    // 2. ─── AUTO-CASCADA PARA REPETICIONES ───
    const parts = currentRepsKey.split('_');
    const d = parts[0], exI = parts[1];

    // 🛡️ EL ESCUDO: Detectamos si es calentamiento
    const isWarmup = String(parts[2]).startsWith('W');

    // Solo hacemos cascada si NO es calentamiento
    if (!isWarmup) {
        const currentSet = parseInt(parts[2]);
        const totalSets = ROUTINE[d].exercises[exI].sets;

        for (let nextSet = currentSet + 1; nextSet <= totalSets; nextSet++) {
            const nextKey = `${d}_${exI}_${nextSet}`;
            if (!sessionState[nextKey]) sessionState[nextKey] = { done: false, w: '', r: '' };

            // Solo hace cascada si la celda de abajo está vacía
            if (sessionState[nextKey].r === '' || sessionState[nextKey].r === undefined) {
                sessionState[nextKey].r = finalReps;
                const nextRow = document.getElementById(`row-${nextKey}`);
                if (nextRow) nextRow.querySelectorAll('.gym-input')[1].value = finalReps;
            }
        }
    }

    persistSession();
    document.getElementById('modal-reps').classList.remove('show');
    if (navigator.vibrate) navigator.vibrate([40, 30]); // Confirmación
}