import type { Locale } from "@/i18n/config";

export interface LegalSection {
  title: string;
  body: string;
}

export interface LegalDocument {
  updatedAt: string;
  sections: LegalSection[];
}

// Kept as a dedicated content file, not part of src/dictionaries/*.json --
// legal text is reviewed/updated on its own cadence (see the mobile app's
// src/data/legalContent.ts, which this mirrors section-for-section) and
// shouldn't get tangled up with marketing-copy translation work.
export const PRIVACY_POLICY_BY_LOCALE: Record<Locale, LegalDocument> = {
  en: {
    updatedAt: "August 19, 2026",
    sections: [
      {
        title: "1. About this policy",
        body: 'This Privacy Policy explains how PulseUp ("PulseUp", "we", "us", or "our") collects, uses, stores, shares, and protects information when you use our mobile application and website (together, the "Service"). By using the Service, you acknowledge the practices described in this Privacy Policy. Where required by applicable law, we will obtain your consent before processing information that requires consent.',
      },
      {
        title: "2. Account information",
        body: "When you create a PulseUp account directly, we may collect your name, email address, username, profile photo, and password, stored in hashed form.",
      },
      {
        title: "3. Google Sign-In",
        body: "If you choose to sign in with Google, Google may provide us with your name, email address, profile picture, and a unique account identifier necessary to create and authenticate your PulseUp account. We do not receive your Google password and do not access other Google services on your behalf unless separately authorized by you. You can review or revoke PulseUp's access through your Google Account settings.",
      },
      {
        title: "4. Sign in with Apple",
        body: "If you choose to sign in with Apple, Apple may provide us with your name, when available and authorized, and your email address or an Apple private relay email address if you choose to hide your email. We do not receive your Apple ID password.",
      },
      {
        title: "5. Fitness and activity data",
        body: "When you use PulseUp fitness features, we may collect and process information related to your activities, including: workouts and exercises; sets, repetitions, weights, duration, and other workout metrics; cardio sessions; distance, pace, speed, duration, and elevation; training history; streaks, XP, achievements, and other gamification data; activity information generated during live-tracked sessions; and route information associated with supported outdoor activities.",
      },
      {
        title: "6. Route and location data",
        body: "When you activate a feature that requires location, such as Live Cardio, PulseUp may collect precise location information during that activity. Depending on the feature and permissions granted, route information may include latitude and longitude, the timestamp associated with route points, distance, speed, altitude or elevation, route geometry, and other technical information necessary to calculate activity metrics. PulseUp collects location for these purposes only when the relevant feature is active and does not continuously track your location outside an active feature that requires location.",
      },
      {
        title: "7. Apple HealthKit and connected health data",
        body: "If you choose to connect Apple HealthKit or another supported fitness or wearable service and grant the requested permissions, PulseUp may access only the categories of health and fitness information that you authorize and that are required for the features you use. Depending on your permissions and the available integrations, this may include workouts, heart rate, active energy, distance, exercise duration, body measurements, and other authorized fitness or health metrics. Health and fitness information obtained through connected services is used to provide and improve the fitness functionality you request. We do not sell health information or use HealthKit data for advertising, advertising measurement, or other purposes unrelated to providing the requested fitness functionality.",
      },
      {
        title: "8. Pulse AI",
        body: "When you use Pulse AI, we collect the messages and information you provide to the assistant. Depending on the feature you use, Pulse AI may also process relevant fitness information needed to generate personalized responses, such as workout history, exercise information, cardio performance, training metrics, body measurements, nutrition-related information provided by you, and other information you explicitly provide within the relevant workspace.",
      },
      {
        title: "9. Social content",
        body: "If you choose to use PulseUp's social features, we may collect and store posts and Moments, photos and other media, reactions, comments, Crew memberships, Party Workout participation, and other content and interactions you choose to share.",
      },
      {
        title: "10. Device and usage information",
        body: "We may automatically collect technical and usage information, including device model, operating system, app version, IP address, crash information, diagnostics, performance information, analytics events, and information about how you interact with the Service. We may use analytics technologies, such as Google Analytics or other supported analytics services, to understand how the Service is used and to improve its functionality.",
      },
      {
        title: "11. How we use your information",
        body: "We use information we collect to: create and maintain your PulseUp account; provide, operate, and maintain the Service; record and display your workouts and activities; calculate fitness metrics such as distance, pace, speed, duration, and elevation; track training history, streaks, XP, achievements, and other gamification features; provide Live Cardio and other activity-tracking functionality; personalize your fitness experience and recommendations; generate responses, workout plans, and nutrition-related plans through Pulse AI where applicable; provide social and community features; detect, prevent, and investigate fraud, abuse, security incidents, and technical problems; monitor performance and improve the Service; understand aggregated and de-identified fitness activity trends; comply with applicable legal obligations; communicate with you about your account, the Service, security, updates, and other service-related matters; and send marketing communications where permitted by applicable law and, where required, with your consent or subject to an available opt-out mechanism.",
      },
      {
        title: "12. Activity and training pattern analysis",
        body: "PulseUp may analyze information generated during your workouts to provide personalized fitness functionality. For example, we may use your activity history to understand patterns such as typical workout duration, training frequency, activity type, running or cycling performance, distance and pace trends, frequently used workout routes, changes in training performance over time, and training consistency. This analysis is focused on your fitness activity and is intended to improve your experience, provide useful insights, and support personalized fitness features. PulseUp does not continuously monitor your behavior or location outside the activities and features for which you have enabled the relevant functionality.",
      },
      {
        title: "13. Aggregated activity data and heatmaps",
        body: "PulseUp may create aggregated and de-identified insights from activity and route information generated by multiple users. These insights may include general information such as areas with higher concentrations of outdoor activity, popular activity types in a region, general activity volume, activity trends over time, general peak activity periods, and changes in activity levels across geographic areas. PulseUp may use these aggregated insights for internal analytics, product development, service improvement, and business intelligence. Heatmaps and similar visualizations are designed to represent aggregated activity rather than individual users. PulseUp will not intentionally display an individual user's identity, account information, or individual route as part of an aggregated activity heatmap. Where appropriate, PulseUp may apply aggregation or minimum-activity thresholds before displaying geographic activity information to reduce the risk that an individual user can be identified from the visualization.",
      },
      {
        title: "14. Location data",
        body: "Certain PulseUp features require precise location information. When you activate Live Cardio or another location-based activity feature, PulseUp may use your device's location services to record your route and calculate activity metrics such as distance, pace, speed, and elevation. Location collection is limited to the period and functionality for which the relevant feature is active. You can disable location permissions through your device settings. If you do so, features that require location may no longer function correctly. PulseUp does not use location services to continuously track your movements outside an active feature that requires location.",
      },
      {
        title: "15. How we share information",
        body: "We do not sell your personal information. We may disclose information to the following categories of recipients when necessary to operate the Service, fulfill the purposes described in this Privacy Policy, or comply with applicable law: service providers that process information on our behalf, including providers for cloud hosting and infrastructure, authentication, analytics, crash reporting, artificial intelligence services, storage and media delivery, security and fraud prevention, and other technical services required to operate PulseUp (examples may include Google Cloud, Firebase, Google Sign-In, Sign in with Apple, Google Analytics, and Anthropic, depending on the specific feature and implementation); our Pulse AI providers, since relevant information may be processed by our artificial intelligence service providers to generate the requested responses or plans -- for example, Anthropic may process Pulse AI messages and relevant information provided to the coach or nutritionist functionality for the purpose of generating responses, and we do not provide health or fitness information to AI providers for advertising purposes; other users, since information and content that you intentionally share through PulseUp's social features may be visible to other users according to the visibility settings and functionality of the Service; recipients required by law, since we may disclose information when reasonably necessary to comply with applicable laws or legal processes, respond to valid legal requests, protect the rights, safety, and property of PulseUp, our users, or others, or detect or prevent fraud, abuse, or security threats; and a successor entity, since information may be transferred in connection with a merger, acquisition, financing, reorganization, sale of assets, or similar corporate transaction, subject to applicable law.",
      },
      {
        title: "16. Health and fitness data restrictions",
        body: "We treat health and fitness information with particular care. Health information obtained through HealthKit or other connected services is used only for purposes permitted by the applicable platform, your permissions, and applicable law. PulseUp does not sell health information. We do not use HealthKit data for advertising, targeted advertising, advertising measurement, or data brokerage. We do not use health information obtained through HealthKit to build advertising profiles about you.",
      },
      {
        title: "17. Data retention",
        body: "We retain information for as long as reasonably necessary to provide the Service, maintain your account, provide your requested features, comply with legal obligations, resolve disputes, enforce agreements, and protect the security of the Service. Activity and route information may be retained as part of your workout history while your account remains active so that you can access historical activity, performance metrics, routes, and related features. We may retain aggregated and appropriately de-identified information for longer periods where it is no longer reasonably associated with an identifiable individual and is used for legitimate analytics, product improvement, or business intelligence purposes. Retention periods may vary depending on the type of information and the purpose for which it is processed.",
      },
      {
        title: "18. Account deletion and data deletion",
        body: "You can request deletion of your PulseUp account through Settings → Account → Delete Account. When you delete your account, we will initiate the deletion or de-identification of information associated with your account, subject to information that we are required or legally permitted to retain. This may include certain records necessary for legal compliance, security, fraud prevention, dispute resolution, enforcement of agreements, and operational integrity. Where activity or route information has already been transformed into aggregated and de-identified statistics that cannot reasonably be associated with you, those aggregated statistics may continue to be retained. You may contact us at privacy@pulseup.io to request additional information regarding deletion or remaining data.",
      },
      {
        title: "19. Data security",
        body: "We use reasonable technical and organizational measures designed to protect information against unauthorized access, disclosure, alteration, loss, or destruction. These measures may include access controls, authentication mechanisms, encryption where appropriate, secure infrastructure, monitoring, and other security practices. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      },
      {
        title: "20. Your privacy rights",
        body: "Depending on where you live and applicable law, including Brazil's LGPD, the European Union's GDPR, the United Kingdom's applicable data protection laws, or applicable United States privacy laws, you may have rights concerning your personal information, including the right to access your personal information, correct inaccurate information, request deletion, request data portability or export, object to or restrict certain processing, withdraw consent where processing is based on consent, request information about how your information is processed, and lodge a complaint with the applicable data protection authority. You can manage certain information and permissions directly through the PulseUp app. You can also contact us at privacy@pulseup.io. We may need to verify your identity before completing certain requests.",
      },
      {
        title: "21. Children's privacy",
        body: "PulseUp is not directed to children under 13 years of age, or the minimum age required in the applicable jurisdiction. We do not knowingly collect personal information from children below the applicable minimum age. If you believe that a child has provided personal information to PulseUp, please contact us at privacy@pulseup.io so that we can investigate and take appropriate action.",
      },
      {
        title: "22. International data transfers",
        body: "PulseUp and its service providers may process and store information in countries other than the country where you live. For example, certain service providers may operate infrastructure in the United States or other countries. Where required by applicable law, we take appropriate measures to provide an adequate level of protection for personal information transferred internationally.",
      },
      {
        title: "23. Cookies and similar technologies",
        body: "Our website and certain parts of the Service may use cookies, SDKs, analytics technologies, and similar technologies to maintain functionality, understand usage, improve performance, and, where applicable and permitted, support communications and marketing. Where required by applicable law, we will request the necessary consent before using non-essential technologies.",
      },
      {
        title: "24. Third-party services",
        body: "The Service may integrate with or rely on third-party services, including authentication providers, health and fitness platforms, cloud infrastructure providers, analytics providers, artificial intelligence providers, and other technology providers. Your use of a third-party service may also be subject to that provider's own privacy policy and terms. Examples include Google, Apple, Firebase, Google Cloud, Google Analytics, and Anthropic. We encourage you to review the privacy practices of third-party services that you choose to connect to PulseUp.",
      },
      {
        title: "25. Changes to this Privacy Policy",
        body: 'We may update this Privacy Policy from time to time to reflect changes to the Service, our data practices, technology, or applicable legal requirements. When we make material changes, we may notify you through the Service, by email, or through another appropriate method where required. The "Last updated" date at the beginning of this Privacy Policy indicates when the policy was most recently revised.',
      },
      {
        title: "26. Contact us",
        body: "If you have questions, concerns, or requests regarding this Privacy Policy or the processing of your personal information, please contact us at privacy@pulseup.io. We will make reasonable efforts to respond to privacy-related requests in accordance with applicable law.",
      },
    ],
  },
  pt: {
    updatedAt: "19 de agosto de 2026",
    sections: [
      {
        title: "1. Sobre esta política",
        body: 'Esta Política de Privacidade explica como o PulseUp ("PulseUp", "nós" ou "nosso") coleta, usa, armazena, compartilha e protege informações quando você usa nosso aplicativo móvel e nosso site (em conjunto, o "Serviço"). Ao usar o Serviço, você reconhece as práticas descritas nesta Política de Privacidade. Quando exigido pela legislação aplicável, obteremos seu consentimento antes de tratar informações que exijam consentimento.',
      },
      {
        title: "2. Informações de conta",
        body: "Quando você cria uma conta PulseUp diretamente, podemos coletar seu nome, endereço de e-mail, nome de usuário, foto de perfil e senha, armazenada em formato criptografado (hash).",
      },
      {
        title: "3. Login com Google",
        body: "Se você escolher fazer login com o Google, o Google pode nos fornecer seu nome, endereço de e-mail, foto de perfil e um identificador único de conta necessário para criar e autenticar sua conta PulseUp. Não recebemos sua senha do Google e não acessamos outros serviços do Google em seu nome, a menos que você autorize separadamente. Você pode revisar ou revogar o acesso do PulseUp nas configurações da sua Conta Google.",
      },
      {
        title: "4. Login com a Apple (Sign in with Apple)",
        body: "Se você escolher fazer login com a Apple, a Apple pode nos fornecer seu nome, quando disponível e autorizado, e seu endereço de e-mail ou um e-mail de retransmissão privada da Apple, caso você opte por ocultar seu e-mail. Não recebemos sua senha do Apple ID.",
      },
      {
        title: "5. Dados de fitness e atividade",
        body: "Quando você usa os recursos de fitness do PulseUp, podemos coletar e tratar informações relacionadas às suas atividades, incluindo: treinos e exercícios; séries, repetições, cargas, duração e outras métricas de treino; sessões de cardio; distância, ritmo, velocidade, duração e elevação; histórico de treinos; sequências (streaks), XP, conquistas e outros dados de gamificação; informações de atividade geradas durante sessões com rastreamento ao vivo; e informações de rota associadas às atividades ao ar livre suportadas.",
      },
      {
        title: "6. Dados de rota e localização",
        body: "Quando você ativa um recurso que exige localização, como o Live Cardio, o PulseUp pode coletar informações precisas de localização durante essa atividade. Dependendo do recurso e das permissões concedidas, as informações de rota podem incluir latitude e longitude, o horário (timestamp) associado a cada ponto da rota, distância, velocidade, altitude ou elevação, a geometria da rota e outras informações técnicas necessárias para calcular as métricas da atividade. O PulseUp coleta localização para essas finalidades apenas quando o recurso relevante está ativo, e não rastreia sua localização continuamente fora de um recurso ativo que exija localização.",
      },
      {
        title: "7. Apple HealthKit e serviços de saúde conectados",
        body: "Se você optar por conectar o Apple HealthKit ou outro serviço de fitness ou wearable compatível e conceder as permissões solicitadas, o PulseUp pode acessar apenas as categorias de informações de saúde e fitness que você autorizar e que sejam necessárias para os recursos que você utiliza. Dependendo das suas permissões e das integrações disponíveis, isso pode incluir treinos, frequência cardíaca, energia ativa, distância, duração do exercício, medidas corporais e outras métricas de fitness ou saúde autorizadas. As informações de saúde e fitness obtidas por meio de serviços conectados são usadas para fornecer e melhorar a funcionalidade de fitness que você solicita. Não vendemos informações de saúde nem usamos dados do HealthKit para publicidade, mensuração de publicidade ou outras finalidades não relacionadas ao fornecimento da funcionalidade de fitness solicitada.",
      },
      {
        title: "8. Pulse AI",
        body: "Quando você usa o Pulse AI, coletamos as mensagens e informações que você fornece ao assistente. Dependendo do recurso que você utiliza, o Pulse AI também pode tratar informações de fitness relevantes necessárias para gerar respostas personalizadas, como histórico de treinos, informações sobre exercícios, desempenho em cardio, métricas de treino, medidas corporais, informações relacionadas à nutrição fornecidas por você e outras informações que você forneça explicitamente dentro do workspace relevante.",
      },
      {
        title: "9. Conteúdo social",
        body: "Se você optar por usar os recursos sociais do PulseUp, podemos coletar e armazenar posts e Moments, fotos e outras mídias, reações, comentários, participação em Crews, participação em Party Workout e outros conteúdos e interações que você escolher compartilhar.",
      },
      {
        title: "10. Informações de dispositivo e uso",
        body: "Podemos coletar automaticamente informações técnicas e de uso, incluindo modelo do dispositivo, sistema operacional, versão do aplicativo, endereço IP, informações de falhas (crash), diagnósticos, informações de desempenho, eventos de analytics e informações sobre como você interage com o Serviço. Podemos usar tecnologias de análise, como o Google Analytics ou outros serviços de analytics compatíveis, para entender como o Serviço é utilizado e melhorar sua funcionalidade.",
      },
      {
        title: "11. Como usamos suas informações",
        body: "Usamos as informações que coletamos para: criar e manter sua conta PulseUp; fornecer, operar e manter o Serviço; registrar e exibir seus treinos e atividades; calcular métricas de fitness como distância, ritmo, velocidade, duração e elevação; acompanhar histórico de treinos, sequências (streaks), XP, conquistas e outros recursos de gamificação; fornecer o Live Cardio e outras funcionalidades de rastreamento de atividade; personalizar sua experiência de fitness e recomendações; gerar respostas, planos de treino e planos relacionados à nutrição por meio do Pulse AI, quando aplicável; fornecer recursos sociais e de comunidade; detectar, prevenir e investigar fraude, abuso, incidentes de segurança e problemas técnicos; monitorar desempenho e melhorar o Serviço; entender tendências agregadas e anonimizadas de atividade física; cumprir obrigações legais aplicáveis; comunicar-nos com você sobre sua conta, o Serviço, segurança, atualizações e outros assuntos relacionados ao serviço; e enviar comunicações de marketing quando permitido pela legislação aplicável e, quando exigido, mediante seu consentimento ou sujeito a um mecanismo de exclusão (opt-out) disponível.",
      },
      {
        title: "12. Análise de padrões de atividade e treino",
        body: "O PulseUp pode analisar as informações geradas durante seus treinos para fornecer funcionalidades de fitness personalizadas. Por exemplo, podemos usar seu histórico de atividades para entender padrões como duração típica de treino, frequência de treino, tipo de atividade, desempenho em corrida ou ciclismo, tendências de distância e ritmo, rotas de treino frequentemente utilizadas, mudanças no desempenho de treino ao longo do tempo e consistência de treino. Essa análise é focada na sua atividade física e destina-se a melhorar sua experiência, fornecer insights úteis e oferecer suporte a recursos de fitness personalizados. O PulseUp não monitora continuamente seu comportamento ou localização fora das atividades e recursos para os quais você habilitou a funcionalidade correspondente.",
      },
      {
        title: "13. Dados agregados de atividade e mapas de calor (heatmaps)",
        body: "O PulseUp pode criar insights agregados e anonimizados a partir de informações de atividade e rota geradas por múltiplos usuários. Esses insights podem incluir informações gerais como áreas com maior concentração de atividades ao ar livre, tipos de atividade populares em uma região, volume geral de atividade, tendências de atividade ao longo do tempo, períodos gerais de pico de atividade e mudanças nos níveis de atividade entre áreas geográficas. O PulseUp pode usar esses insights agregados para análises internas, desenvolvimento de produto, melhoria do serviço e inteligência de negócios. Mapas de calor e visualizações semelhantes são projetados para representar atividade agregada, e não usuários individuais. O PulseUp não exibirá intencionalmente a identidade, informações de conta ou rota individual de um usuário como parte de um mapa de calor de atividade agregada. Quando apropriado, o PulseUp pode aplicar limites de agregação ou de atividade mínima antes de exibir informações geográficas de atividade, para reduzir o risco de que um usuário individual possa ser identificado a partir da visualização.",
      },
      {
        title: "14. Dados de localização",
        body: "Determinados recursos do PulseUp exigem informações precisas de localização. Quando você ativa o Live Cardio ou outro recurso de atividade baseado em localização, o PulseUp pode usar os serviços de localização do seu dispositivo para registrar sua rota e calcular métricas de atividade como distância, ritmo, velocidade e elevação. A coleta de localização é limitada ao período e à funcionalidade para os quais o recurso relevante está ativo. Você pode desativar as permissões de localização nas configurações do seu dispositivo. Se você fizer isso, os recursos que exigem localização podem deixar de funcionar corretamente. O PulseUp não usa os serviços de localização para rastrear continuamente seus deslocamentos fora de um recurso ativo que exija localização.",
      },
      {
        title: "15. Como compartilhamos informações",
        body: "Não vendemos suas informações pessoais. Podemos divulgar informações às seguintes categorias de destinatários quando necessário para operar o Serviço, cumprir as finalidades descritas nesta Política de Privacidade ou cumprir a legislação aplicável: operadores de serviço que tratam informações em nosso nome, incluindo provedores de hospedagem e infraestrutura em nuvem, autenticação, analytics, relatórios de falhas, serviços de inteligência artificial, armazenamento e entrega de mídia, segurança e prevenção de fraude, e outros serviços técnicos necessários para operar o PulseUp (exemplos podem incluir Google Cloud, Firebase, Google Sign-In, Sign in with Apple, Google Analytics e Anthropic, dependendo do recurso e da implementação específicos); nossos provedores do Pulse AI, já que informações relevantes podem ser tratadas pelos nossos provedores de serviços de inteligência artificial para gerar as respostas ou os planos solicitados — por exemplo, a Anthropic pode tratar mensagens do Pulse AI e informações relevantes fornecidas às funcionalidades de coach ou nutricionista com a finalidade de gerar respostas, e não fornecemos informações de saúde ou fitness a provedores de IA para fins publicitários; outros usuários, já que informações e conteúdos que você compartilha intencionalmente por meio dos recursos sociais do PulseUp podem ficar visíveis a outros usuários de acordo com as configurações de visibilidade e a funcionalidade do Serviço; destinatários exigidos por lei, já que podemos divulgar informações quando razoavelmente necessário para cumprir leis ou processos legais aplicáveis, responder a solicitações legais válidas, proteger os direitos, a segurança e o patrimônio do PulseUp, de nossos usuários ou de terceiros, ou detectar ou prevenir fraude, abuso ou ameaças à segurança; e uma entidade sucessora, já que informações podem ser transferidas em conexão com uma fusão, aquisição, financiamento, reorganização, venda de ativos ou operação societária semelhante, sujeito à legislação aplicável.",
      },
      {
        title: "16. Restrições sobre dados de saúde e fitness",
        body: "Tratamos informações de saúde e fitness com cuidado especial. Informações de saúde obtidas por meio do HealthKit ou de outros serviços conectados são usadas somente para finalidades permitidas pela plataforma aplicável, pelas suas permissões e pela legislação aplicável. O PulseUp não vende informações de saúde. Não usamos dados do HealthKit para publicidade, publicidade direcionada, mensuração de publicidade ou corretagem de dados (data brokerage). Não usamos informações de saúde obtidas pelo HealthKit para construir perfis publicitários sobre você.",
      },
      {
        title: "17. Retenção de dados",
        body: "Mantemos as informações pelo tempo razoavelmente necessário para fornecer o Serviço, manter sua conta, disponibilizar os recursos solicitados, cumprir obrigações legais, resolver disputas, fazer cumprir acordos e proteger a segurança do Serviço. Informações de atividade e rota podem ser mantidas como parte do seu histórico de treinos enquanto sua conta permanecer ativa, para que você possa acessar histórico de atividades, métricas de desempenho, rotas e recursos relacionados. Podemos manter informações agregadas e devidamente anonimizadas por períodos mais longos quando elas não estiverem mais razoavelmente associadas a um indivíduo identificável e forem usadas para finalidades legítimas de análise, melhoria de produto ou inteligência de negócios. Os prazos de retenção podem variar dependendo do tipo de informação e da finalidade para a qual ela é tratada.",
      },
      {
        title: "18. Exclusão de conta e de dados",
        body: "Você pode solicitar a exclusão da sua conta PulseUp em Configurações → Conta → Excluir Conta. Ao excluir sua conta, iniciaremos a exclusão ou anonimização das informações associadas à sua conta, sujeito às informações que somos obrigados ou legalmente permitidos a reter. Isso pode incluir determinados registros necessários para conformidade legal, segurança, prevenção de fraude, resolução de disputas, cumprimento de acordos e integridade operacional. Quando informações de atividade ou rota já tiverem sido transformadas em estatísticas agregadas e devidamente anonimizadas que não possam razoavelmente ser associadas a você, essas estatísticas agregadas poderão continuar sendo mantidas. Você pode entrar em contato conosco em privacy@pulseup.io para solicitar informações adicionais sobre exclusão ou dados remanescentes.",
      },
      {
        title: "19. Segurança de dados",
        body: "Utilizamos medidas técnicas e organizacionais razoáveis, projetadas para proteger as informações contra acesso não autorizado, divulgação, alteração, perda ou destruição. Essas medidas podem incluir controles de acesso, mecanismos de autenticação, criptografia quando apropriado, infraestrutura segura, monitoramento e outras práticas de segurança. No entanto, nenhum método de transmissão ou armazenamento é totalmente seguro, e não podemos garantir segurança absoluta.",
      },
      {
        title: "20. Seus direitos de privacidade",
        body: "Dependendo de onde você mora e da legislação aplicável, incluindo a LGPD do Brasil, o GDPR da União Europeia, as leis de proteção de dados aplicáveis do Reino Unido, ou leis de privacidade aplicáveis dos Estados Unidos, você pode ter direitos relacionados às suas informações pessoais, incluindo o direito de acessar suas informações pessoais, corrigir informações incorretas, solicitar exclusão, solicitar portabilidade ou exportação de dados, opor-se a determinados tratamentos ou solicitar sua restrição, revogar o consentimento quando o tratamento for baseado em consentimento, solicitar informações sobre como suas informações são tratadas, e apresentar reclamação à autoridade de proteção de dados aplicável. Você pode gerenciar determinadas informações e permissões diretamente pelo aplicativo PulseUp. Você também pode entrar em contato conosco em privacy@pulseup.io. Podemos precisar verificar sua identidade antes de concluir determinadas solicitações.",
      },
      {
        title: "21. Privacidade de crianças",
        body: "O PulseUp não é direcionado a crianças menores de 13 anos, ou a idade mínima exigida na jurisdição aplicável. Não coletamos intencionalmente informações pessoais de crianças abaixo da idade mínima aplicável. Se você acredita que uma criança forneceu informações pessoais ao PulseUp, entre em contato conosco em privacy@pulseup.io para que possamos investigar e tomar as medidas apropriadas.",
      },
      {
        title: "22. Transferências internacionais de dados",
        body: "O PulseUp e seus operadores de serviço podem tratar e armazenar informações em países diferentes do país onde você mora. Por exemplo, determinados operadores de serviço podem operar infraestrutura nos Estados Unidos ou em outros países. Quando exigido pela legislação aplicável, adotamos medidas apropriadas para fornecer um nível adequado de proteção às informações pessoais transferidas internacionalmente.",
      },
      {
        title: "23. Cookies e tecnologias semelhantes",
        body: "Nosso site e determinadas partes do Serviço podem usar cookies, SDKs, tecnologias de análise e tecnologias semelhantes para manter a funcionalidade, entender o uso, melhorar o desempenho e, quando aplicável e permitido, dar suporte a comunicações e marketing. Quando exigido pela legislação aplicável, solicitaremos o consentimento necessário antes de usar tecnologias não essenciais.",
      },
      {
        title: "24. Serviços de terceiros",
        body: "O Serviço pode se integrar a, ou depender de, serviços de terceiros, incluindo provedores de autenticação, plataformas de saúde e fitness, provedores de infraestrutura em nuvem, provedores de analytics, provedores de inteligência artificial e outros provedores de tecnologia. O uso que você faz de um serviço de terceiros também pode estar sujeito à própria política de privacidade e aos termos desse provedor. Exemplos incluem Google, Apple, Firebase, Google Cloud, Google Analytics e Anthropic. Recomendamos que você revise as práticas de privacidade dos serviços de terceiros que você optar por conectar ao PulseUp.",
      },
      {
        title: "25. Alterações a esta Política de Privacidade",
        body: 'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças no Serviço, em nossas práticas de dados, na tecnologia ou em requisitos legais aplicáveis. Quando fizermos alterações relevantes, poderemos notificá-lo por meio do Serviço, por e-mail, ou por outro método apropriado, quando exigido. A data de "última atualização" no início desta Política de Privacidade indica quando a política foi revisada mais recentemente.',
      },
      {
        title: "26. Contato",
        body: "Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de suas informações pessoais, entre em contato conosco em privacy@pulseup.io. Faremos esforços razoáveis para responder a solicitações relacionadas à privacidade de acordo com a legislação aplicável.",
      },
    ],
  },
  es: {
    updatedAt: "19 de agosto de 2026",
    sections: [
      {
        title: "1. Sobre esta política",
        body: 'Esta Política de Privacidad explica cómo PulseUp ("PulseUp", "nosotros" o "nuestro") recopila, usa, almacena, comparte y protege la información cuando utilizas nuestra aplicación móvil y nuestro sitio web (en conjunto, el "Servicio"). Al utilizar el Servicio, reconoces las prácticas descritas en esta Política de Privacidad. Cuando lo exija la legislación aplicable, obtendremos tu consentimiento antes de tratar información que lo requiera.',
      },
      {
        title: "2. Información de la cuenta",
        body: "Cuando creas una cuenta de PulseUp directamente, podemos recopilar tu nombre, dirección de correo electrónico, nombre de usuario, foto de perfil y contraseña, almacenada en formato cifrado (hash).",
      },
      {
        title: "3. Inicio de sesión con Google",
        body: "Si eliges iniciar sesión con Google, Google puede proporcionarnos tu nombre, dirección de correo electrónico, foto de perfil y un identificador único de cuenta necesario para crear y autenticar tu cuenta de PulseUp. No recibimos tu contraseña de Google ni accedemos a otros servicios de Google en tu nombre, salvo que lo autorices por separado. Puedes revisar o revocar el acceso de PulseUp en la configuración de tu Cuenta de Google.",
      },
      {
        title: "4. Inicio de sesión con Apple (Sign in with Apple)",
        body: "Si eliges iniciar sesión con Apple, Apple puede proporcionarnos tu nombre, cuando esté disponible y autorizado, y tu dirección de correo electrónico o una dirección de retransmisión privada de Apple, si eliges ocultar tu correo. No recibimos tu contraseña de Apple ID.",
      },
      {
        title: "5. Datos de fitness y actividad",
        body: "Cuando usas las funciones de fitness de PulseUp, podemos recopilar y tratar información relacionada con tus actividades, incluyendo: entrenamientos y ejercicios; series, repeticiones, cargas, duración y otras métricas de entrenamiento; sesiones de cardio; distancia, ritmo, velocidad, duración y elevación; historial de entrenamiento; rachas (streaks), XP, logros y otros datos de gamificación; información de actividad generada durante sesiones con seguimiento en vivo; e información de ruta asociada a las actividades al aire libre compatibles.",
      },
      {
        title: "6. Datos de ruta y ubicación",
        body: "Cuando activas una función que requiere ubicación, como Live Cardio, PulseUp puede recopilar información precisa de ubicación durante esa actividad. Según la función y los permisos otorgados, la información de ruta puede incluir latitud y longitud, la marca de tiempo asociada a cada punto de la ruta, distancia, velocidad, altitud o elevación, la geometría de la ruta y otra información técnica necesaria para calcular las métricas de actividad. PulseUp recopila ubicación para estos fines únicamente mientras la función correspondiente está activa, y no rastrea tu ubicación de forma continua fuera de una función activa que la requiera.",
      },
      {
        title: "7. Apple HealthKit y servicios de salud conectados",
        body: "Si eliges conectar Apple HealthKit u otro servicio de fitness o wearable compatible y otorgas los permisos solicitados, PulseUp puede acceder únicamente a las categorías de información de salud y fitness que autorices y que sean necesarias para las funciones que utilizas. Según tus permisos y las integraciones disponibles, esto puede incluir entrenamientos, frecuencia cardíaca, energía activa, distancia, duración del ejercicio, medidas corporales y otras métricas de fitness o salud autorizadas. La información de salud y fitness obtenida a través de servicios conectados se utiliza para proporcionar y mejorar la funcionalidad de fitness que solicitas. No vendemos información de salud ni usamos datos de HealthKit con fines publicitarios, de medición publicitaria u otros fines no relacionados con la funcionalidad de fitness solicitada.",
      },
      {
        title: "8. Pulse AI",
        body: "Cuando usas Pulse AI, recopilamos los mensajes e información que proporcionas al asistente. Según la función que utilices, Pulse AI también puede tratar información de fitness relevante necesaria para generar respuestas personalizadas, como historial de entrenamiento, información sobre ejercicios, rendimiento en cardio, métricas de entrenamiento, medidas corporales, información relacionada con la nutrición que proporciones, y otra información que proporciones explícitamente dentro del espacio de trabajo correspondiente.",
      },
      {
        title: "9. Contenido social",
        body: "Si eliges usar las funciones sociales de PulseUp, podemos recopilar y almacenar publicaciones y Moments, fotos y otros medios, reacciones, comentarios, membresías de Crew, participación en Party Workout, y otro contenido e interacciones que decidas compartir.",
      },
      {
        title: "10. Información del dispositivo y de uso",
        body: "Podemos recopilar automáticamente información técnica y de uso, incluyendo modelo del dispositivo, sistema operativo, versión de la app, dirección IP, información de fallos (crash), diagnósticos, información de rendimiento, eventos de analítica e información sobre cómo interactúas con el Servicio. Podemos utilizar tecnologías de análisis, como Google Analytics u otros servicios de analítica compatibles, para entender cómo se usa el Servicio y mejorar su funcionalidad.",
      },
      {
        title: "11. Cómo usamos tu información",
        body: "Usamos la información que recopilamos para: crear y mantener tu cuenta de PulseUp; proporcionar, operar y mantener el Servicio; registrar y mostrar tus entrenamientos y actividades; calcular métricas de fitness como distancia, ritmo, velocidad, duración y elevación; llevar un registro de historial de entrenamiento, rachas, XP, logros y otras funciones de gamificación; proporcionar Live Cardio y otras funcionalidades de seguimiento de actividad; personalizar tu experiencia de fitness y las recomendaciones; generar respuestas, planes de entrenamiento y planes relacionados con la nutrición a través de Pulse AI cuando corresponda; proporcionar funciones sociales y de comunidad; detectar, prevenir e investigar fraude, abuso, incidentes de seguridad y problemas técnicos; monitorear el rendimiento y mejorar el Servicio; comprender tendencias agregadas y anonimizadas de actividad física; cumplir con las obligaciones legales aplicables; comunicarnos contigo sobre tu cuenta, el Servicio, seguridad, actualizaciones y otros asuntos relacionados con el servicio; y enviar comunicaciones de marketing cuando lo permita la legislación aplicable y, cuando se requiera, con tu consentimiento o sujeto a un mecanismo de exclusión (opt-out) disponible.",
      },
      {
        title: "12. Análisis de patrones de actividad y entrenamiento",
        body: "PulseUp puede analizar la información generada durante tus entrenamientos para proporcionar funcionalidades de fitness personalizadas. Por ejemplo, podemos usar tu historial de actividad para entender patrones como la duración típica del entrenamiento, la frecuencia de entrenamiento, el tipo de actividad, el rendimiento en carrera o ciclismo, las tendencias de distancia y ritmo, las rutas de entrenamiento usadas con frecuencia, los cambios en el rendimiento de entrenamiento a lo largo del tiempo y la consistencia del entrenamiento. Este análisis se centra en tu actividad física y tiene como objetivo mejorar tu experiencia, proporcionar información útil y respaldar funciones de fitness personalizadas. PulseUp no monitorea continuamente tu comportamiento o ubicación fuera de las actividades y funciones para las que has habilitado la funcionalidad correspondiente.",
      },
      {
        title: "13. Datos de actividad agregados y mapas de calor (heatmaps)",
        body: "PulseUp puede crear información agregada y anonimizada a partir de datos de actividad y ruta generados por múltiples usuarios. Esta información puede incluir datos generales como áreas con mayor concentración de actividad al aire libre, tipos de actividad populares en una región, volumen general de actividad, tendencias de actividad a lo largo del tiempo, períodos generales de mayor actividad y cambios en los niveles de actividad entre áreas geográficas. PulseUp puede usar esta información agregada para análisis interno, desarrollo de producto, mejora del servicio e inteligencia de negocio. Los mapas de calor y visualizaciones similares están diseñados para representar actividad agregada, no usuarios individuales. PulseUp no mostrará intencionalmente la identidad, la información de cuenta ni la ruta individual de un usuario como parte de un mapa de calor de actividad agregada. Cuando sea apropiado, PulseUp puede aplicar umbrales de agregación o de actividad mínima antes de mostrar información geográfica de actividad, para reducir el riesgo de que un usuario individual pueda ser identificado a partir de la visualización.",
      },
      {
        title: "14. Datos de ubicación",
        body: "Ciertas funciones de PulseUp requieren información precisa de ubicación. Cuando activas Live Cardio u otra función de actividad basada en ubicación, PulseUp puede usar los servicios de ubicación de tu dispositivo para registrar tu ruta y calcular métricas de actividad como distancia, ritmo, velocidad y elevación. La recopilación de ubicación se limita al período y a la funcionalidad para los que la función correspondiente está activa. Puedes desactivar los permisos de ubicación en la configuración de tu dispositivo. Si lo haces, las funciones que requieren ubicación pueden dejar de funcionar correctamente. PulseUp no usa los servicios de ubicación para rastrear continuamente tus movimientos fuera de una función activa que la requiera.",
      },
      {
        title: "15. Cómo compartimos información",
        body: "No vendemos tu información personal. Podemos divulgar información a las siguientes categorías de destinatarios cuando sea necesario para operar el Servicio, cumplir los fines descritos en esta Política de Privacidad, o cumplir con la legislación aplicable: encargados del tratamiento que procesan información en nuestro nombre, incluidos proveedores de alojamiento e infraestructura en la nube, autenticación, analítica, informes de fallos, servicios de inteligencia artificial, almacenamiento y entrega de contenido multimedia, seguridad y prevención de fraude, y otros servicios técnicos necesarios para operar PulseUp (los ejemplos pueden incluir Google Cloud, Firebase, Google Sign-In, Sign in with Apple, Google Analytics y Anthropic, según la función y la implementación específicas); nuestros proveedores de Pulse AI, ya que información relevante puede ser procesada por nuestros proveedores de servicios de inteligencia artificial para generar las respuestas o los planes solicitados — por ejemplo, Anthropic puede procesar mensajes de Pulse AI e información relevante proporcionada a la funcionalidad de coach o nutricionista con el fin de generar respuestas, y no proporcionamos información de salud o fitness a proveedores de IA con fines publicitarios; otros usuarios, ya que la información y el contenido que compartes intencionalmente a través de las funciones sociales de PulseUp puede ser visible para otros usuarios según la configuración de visibilidad y la funcionalidad del Servicio; destinatarios exigidos por ley, ya que podemos divulgar información cuando sea razonablemente necesario para cumplir con leyes o procesos legales aplicables, responder a solicitudes legales válidas, proteger los derechos, la seguridad y el patrimonio de PulseUp, de nuestros usuarios o de terceros, o detectar o prevenir fraude, abuso o amenazas de seguridad; y una entidad sucesora, ya que la información puede transferirse en relación con una fusión, adquisición, financiamiento, reorganización, venta de activos u operación societaria similar, sujeto a la legislación aplicable.",
      },
      {
        title: "16. Restricciones sobre datos de salud y fitness",
        body: "Tratamos la información de salud y fitness con especial cuidado. La información de salud obtenida a través de HealthKit u otros servicios conectados se utiliza únicamente para los fines permitidos por la plataforma correspondiente, tus permisos y la legislación aplicable. PulseUp no vende información de salud. No usamos datos de HealthKit con fines publicitarios, publicidad dirigida, medición publicitaria o corretaje de datos (data brokerage). No usamos la información de salud obtenida mediante HealthKit para construir perfiles publicitarios sobre ti.",
      },
      {
        title: "17. Retención de datos",
        body: "Conservamos la información durante el tiempo razonablemente necesario para proporcionar el Servicio, mantener tu cuenta, ofrecer las funciones solicitadas, cumplir obligaciones legales, resolver disputas, hacer cumplir acuerdos y proteger la seguridad del Servicio. La información de actividad y ruta puede conservarse como parte de tu historial de entrenamiento mientras tu cuenta permanezca activa, para que puedas acceder al historial de actividad, métricas de rendimiento, rutas y funciones relacionadas. Podemos conservar información agregada y adecuadamente anonimizada durante períodos más prolongados cuando ya no esté razonablemente asociada a una persona identificable y se utilice para fines legítimos de análisis, mejora de producto o inteligencia de negocio. Los períodos de retención pueden variar según el tipo de información y la finalidad para la que se trata.",
      },
      {
        title: "18. Eliminación de cuenta y de datos",
        body: "Puedes solicitar la eliminación de tu cuenta de PulseUp desde Configuración → Cuenta → Eliminar cuenta. Al eliminar tu cuenta, iniciaremos la eliminación o anonimización de la información asociada a tu cuenta, sujeto a la información que estemos obligados o legalmente autorizados a conservar. Esto puede incluir determinados registros necesarios para el cumplimiento legal, la seguridad, la prevención de fraude, la resolución de disputas, el cumplimiento de acuerdos y la integridad operativa. Cuando la información de actividad o ruta ya se haya transformado en estadísticas agregadas y adecuadamente anonimizadas que no puedan asociarse razonablemente contigo, esas estadísticas agregadas podrán seguir conservándose. Puedes contactarnos en privacy@pulseup.io para solicitar información adicional sobre la eliminación o los datos restantes.",
      },
      {
        title: "19. Seguridad de los datos",
        body: "Utilizamos medidas técnicas y organizativas razonables, diseñadas para proteger la información contra el acceso no autorizado, la divulgación, la alteración, la pérdida o la destrucción. Estas medidas pueden incluir controles de acceso, mecanismos de autenticación, cifrado cuando corresponda, infraestructura segura, monitoreo y otras prácticas de seguridad. Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro, y no podemos garantizar una seguridad absoluta.",
      },
      {
        title: "20. Tus derechos de privacidad",
        body: "Según el lugar donde vivas y la legislación aplicable, incluyendo la LGPD de Brasil, el RGPD de la Unión Europea, las leyes de protección de datos aplicables del Reino Unido, o las leyes de privacidad aplicables de Estados Unidos, es posible que tengas derechos relacionados con tu información personal, incluido el derecho a acceder a tu información personal, corregir información inexacta, solicitar su eliminación, solicitar la portabilidad o exportación de datos, oponerte a determinados tratamientos o solicitar su restricción, revocar el consentimiento cuando el tratamiento se base en el consentimiento, solicitar información sobre cómo se trata tu información, y presentar una reclamación ante la autoridad de protección de datos correspondiente. Puedes gestionar cierta información y permisos directamente desde la app de PulseUp. También puedes contactarnos en privacy@pulseup.io. Es posible que debamos verificar tu identidad antes de completar determinadas solicitudes.",
      },
      {
        title: "21. Privacidad de los niños",
        body: "PulseUp no está dirigida a niños menores de 13 años, o la edad mínima exigida en la jurisdicción correspondiente. No recopilamos intencionalmente información personal de niños por debajo de la edad mínima aplicable. Si crees que un niño ha proporcionado información personal a PulseUp, contáctanos en privacy@pulseup.io para que podamos investigar y tomar las medidas adecuadas.",
      },
      {
        title: "22. Transferencias internacionales de datos",
        body: "PulseUp y sus proveedores de servicios pueden procesar y almacenar información en países distintos de aquel en el que resides. Por ejemplo, determinados proveedores de servicios pueden operar infraestructura en Estados Unidos u otros países. Cuando lo exija la legislación aplicable, adoptamos medidas apropiadas para proporcionar un nivel adecuado de protección a la información personal transferida internacionalmente.",
      },
      {
        title: "23. Cookies y tecnologías similares",
        body: "Nuestro sitio web y determinadas partes del Servicio pueden usar cookies, SDKs, tecnologías de análisis y tecnologías similares para mantener la funcionalidad, entender el uso, mejorar el rendimiento y, cuando corresponda y esté permitido, dar soporte a comunicaciones y marketing. Cuando lo exija la legislación aplicable, solicitaremos el consentimiento necesario antes de usar tecnologías no esenciales.",
      },
      {
        title: "24. Servicios de terceros",
        body: "El Servicio puede integrarse con, o depender de, servicios de terceros, incluidos proveedores de autenticación, plataformas de salud y fitness, proveedores de infraestructura en la nube, proveedores de analítica, proveedores de inteligencia artificial y otros proveedores de tecnología. El uso que hagas de un servicio de terceros también puede estar sujeto a la propia política de privacidad y a los términos de ese proveedor. Los ejemplos incluyen Google, Apple, Firebase, Google Cloud, Google Analytics y Anthropic. Te recomendamos revisar las prácticas de privacidad de los servicios de terceros que elijas conectar con PulseUp.",
      },
      {
        title: "25. Cambios a esta Política de Privacidad",
        body: 'Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en el Servicio, en nuestras prácticas de datos, en la tecnología o en los requisitos legales aplicables. Cuando realicemos cambios importantes, podremos notificarte a través del Servicio, por correo electrónico, o mediante otro método apropiado cuando se requiera. La fecha de "última actualización" al principio de esta Política de Privacidad indica cuándo se revisó por última vez.',
      },
      {
        title: "26. Contacto",
        body: "Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o con el tratamiento de tu información personal, contáctanos en privacy@pulseup.io. Haremos esfuerzos razonables para responder a las solicitudes relacionadas con la privacidad de acuerdo con la legislación aplicable.",
      },
    ],
  },
};

export const PRIVACY_POLICY_TITLE: Record<Locale, string> = {
  en: "Privacy Policy",
  pt: "Política de Privacidade",
  es: "Política de Privacidad",
};
