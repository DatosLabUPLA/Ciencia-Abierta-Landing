const RutasPublicacionData = [
    {
        "name": "Ruta Diamante",
        "color": "#6EC3C9",
        "shortDescription": "Publicaciones de acceso abierto sin costos para autores/as ni lectores/as, ya que usualmente son financiadas por instituciones educativas, sociedades científicas o fondos públicos.",
        "description": "Se basa en el acceso abierto total sin costos para autores/as ni lectores/as. Las revistas que siguen este modelo son financiadas por instituciones académicas, sociedades científicas u organismos públicos. Su mayor característica es que no imponen <strong>APCs (Article Processing Charges)</strong> a la comunidad científica, promoviendo la equidad en la publicación y garantizando la difusión libre del conocimiento sin barreras económicas. Sin embargo, su sostenibilidad depende del apoyo institucional y gubernamental. Es ideal para fomentar una ciencia accesible y colaborativa.",
        "characteristics": [
            "✔️ Acceso libre para autores/as y lectores/as.",
            "❌ No se cobran APCs.",
            "🏛️ Financiación institucional o pública.",           
            "⚖️ Promueve equidad y acceso universal.",         
            "🔄 Depende del apoyo sostenido de organizaciones."
        ]
    },
    {
        "name": "Ruta Dorada",
        "color": "#FFD650",
        "shortDescription": "Los artículos son de acceso abierto inmediato para lectores/as, en revistas que requieren el pago de APCs (Article Processing Charges) de autores/as o instituciones.",
        "description": "Los artículos son accesibles de manera inmediata en revistas de acceso abierto. Sin embargo, las autorías o sus instituciones deben pagar <strong>APCs  (Article Processing Charges)</strong> para cubrir los costos editoriales. Este modelo permite la publicación de artículos con Licencias Abiertas, facilitando su reutilización. Aunque promueve la difusión del conocimiento, el alto costo de publicación puede ser una barrera para la comunidad científica con menos financiamiento.",
        "characteristics": [
            "✔️ Acceso abierto inmediato al artículo publicado.",
            "💰 Requiere el pago de APCs por parte de los/as autores/as o sus instituciones.",
            "📝 Publicación con licencias abiertas que permiten reutilización.",           
            "📈 Favorece la visibilidad y circulación del conocimiento.",         
            "⚠️ Puede excluir a investigadores/as sin financiamiento suficiente."
        ]
    },
    {
        "name": "Ruta Verde",
        "color": "#68DA83",
        "shortDescription": "Permite el autoarchivo del artículo en repositorios institucionales o temáticos para estar disponibles a lectores/as, pero debe seguir las políticas de embargo de las revistas.",
        "description": "Estas revistas, usualmente tradicionales (de pago), no cobran <strong>APCs  (Article Processing Charges)</strong> y permiten a los/as autores/as depositar versiones preliminares (preprints) o finales (postprints) de sus artículos en repositorios digitales abiertos o institucionales. Esto a cambio de que estas revistas impongan un <strong>período de embargo</strong> antes de permitir el acceso abierto al artículo.<br /><br />El <strong>embargo</strong> es un tiempo de espera impuesto por la revista antes de que el artículo pueda publicarse en acceso abierto en un repositorio. Durante este período, que suele ser entre 6 a 24 meses o más, el artículo solo está disponible para suscriptores/as o instituciones que paguen por su acceso. Esto garantiza a la revista retener la novedad de la investigación. Luego de ese tiempo, el artículo es “liberado” para ser depositado en un repositorio.",
        "characteristics": [
            "🔓 Permite el autoarchivo en repositorios abiertos (preprints o postprints).",
            "❌ No se cobran APCs.",
            "🕒 Sujeta a un período de embargo antes del acceso abierto.",           
            "📚 Revistas tradicionales permiten esta opción bajo condiciones.",         
            "🧩 Complementa el modelo de suscripción con acceso abierto diferido."
        ]
    },
    {
        "name": "Ruta Híbrida",
        "color": "#BE94CA",
        "shortDescription": "Revistas que combinan acceso abierto con acceso por suscripción, permitiendo a los/as autores/as la opción de pagar para hacer su artículo libremente accesible, o permitir que su artículo sea accesible a lectores/as si estos/as pagan la suscripción de la revista.",
        "description": "Permite a los/as autores/as elegir entre publicar bajo suscripción o acceso abierto. Si optan por el acceso abierto, deben pagar <strong>APCs (Article Processing Charges)</strong>, mientras que el resto del contenido de la revista permanece restringido. De lo contrario, son los/as lectores/as quienes deberán financiar su acceso a la publicación. Este modelo busca equilibrar los ingresos de las editoriales con el acceso abierto, pero ha sido criticado por el fenómeno del <strong>doble pago</strong> (instituciones pagan suscripciones y APCs simultáneamente).",
        "characteristics": [
            "🔄 Opción entre publicación de acceso abierto o bajo suscripción.",
            "💰 Si se elige acceso abierto, se deben pagar APCs.",
            "🔐 Parte del contenido de la revista permanece cerrado.",           
            "💸 Riesgo de doble pago: suscripción + APCs.",         
            "⚖️ Intenta balancear ingresos editoriales con apertura."
        ]
    },
    {
        "name": "Ruta Bronce",
        "color": "#D29C67",
        "shortDescription": "Acceso gratuito a artículos sin una licencia abierta clara, lo que limita su reutilización y distribución.",
        "description": "Ofrece acceso gratuito a artículos sin licencias claras de reutilización. Generalmente, se trata de artículos que las editoriales liberan temporalmente como estrategia comercial o de difusión. Aunque permite leer el contenido sin restricciones económicas, no garantiza su disponibilidad a largo plazo. Además, la falta de licencias abiertas limita su uso en investigaciones posteriores. Este modelo genera incertidumbre sobre la permanencia del acceso abierto.",
        "characteristics": [
            "✔️ Acceso gratuito al artículo, pero sin licencias claras.",
            "❔ Uso y reutilización limitados o inciertos.",
            "🕒 Acceso puede ser temporal o condicionado.",           
            "📢 Usado como estrategia editorial de promoción.",         
            "🚧 No garantiza preservación a largo plazo ni derechos abiertos."
        ]
    }
];

export default RutasPublicacionData;