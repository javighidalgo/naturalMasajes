# Instrucciones del Proyecto: Web de Fisioterapia

## 1. Perfil del Proyecto
- **Cliente:** Fisioterapeuta profesional.
- **Objetivo:** Crear una web de presentación y un sistema de gestión de citas.
- **Idioma de Interacción:** Todas las explicaciones, planes y comentarios de Git deben ser en **Español**.

## 2. Stack Tecnológico (Obligatorio)
- **Framework:** Next.js 15+ (App Router).
- **Lenguaje:** JavaScript/React.
- **Estilos:** Tailwind CSS.
- **Backend:** API Routes nativas de Next.js (Node.js).
- **Componentes de UI:** Lucide React (para iconos) y Shadcn/ui (para el calendario y formularios).

## 3. Estructura de la Web
- **Página Principal (Home):**
    - Hero section con foto profesional y propuesta de valor.
    - Sección "Sobre mí" (Experiencia y formación).
    - Sección de "Servicios" (Tratamientos, punción seca, masajes, etc.).
- **Sistema de Citas (Booking):**
    - Página con un calendario interactivo.
    - Formulario para capturar: Nombre, Teléfono, Motivo de consulta y Selección de hora.
    - Validación de campos en cliente y servidor.

## 4. Reglas de Gestión (Antigravity Agent)
- **Flujo de Git:** 
    - Realiza un `merge` a `main` solo después de verificar que la build no tiene errores.
- **Calidad de Código:**
    - Usa componentes funcionales y Hooks de React.
    - El diseño debe ser totalmente "Mobile First" (Responsivo).
- **Simulación de Datos:** - Para el calendario, utiliza un archivo JSON local o un mock de base de datos hasta que definamos la persistencia real.

## 5. Tarea Inicial
1. Inicializa el proyecto Next.js con Tailwind.
2. Crea la estructura de carpetas utilizando buenas prácticas.
