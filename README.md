# 🚀 Projeto Frontend

Este projeto foi desenvolvido utilizando **Vite**, **Material UI** e **Emotion**, com foco em performance, simplicidade e uma stack moderna para aplicações React.

---

## 📦 Como rodar o projeto

### Usando NPM
```bash
npm install
npm run dev
```
### Usando Yarn
```bash
yarn install
yarn dev
```
O servidor local será iniciado e estará disponível geralmente em:
👉 http://localhost:5173
## 🛠️ Decisões Técnicas
### ✅ Por que usei Vite?
- Performance superior: build e hot-reload extremamente rápidos em comparação ao Create React App.
- Configuração simplificada: já vem otimizado para projetos modernos em React.
- Suporte nativo a TypeScript e JSX sem necessidade de configurações extras.
### 🎨 Por que Material UI e Emotion ao invés de ShadCN e Tailwind?
- O projeto exigia Emotion, já que é a biblioteca de estilização recomendada pela documentação do Material UI.
- O Tailwind CSS é incompatível com Emotion em termos de paradigma de estilização (utility-first vs. CSS-in-JS).
- Como consequência, não foi possível usar o ShadCN, que é baseado diretamente em Tailwind.
- O Material UI oferece:
  1. Componentes prontos, acessíveis e responsivos.
  2. Ecosistema robusto com suporte oficial a Emotion.
  3. Integração direta com temas e customizações.
## 📌 Conclusão
Optamos por uma stack que prioriza velocidade de desenvolvimento, manutenibilidade e compatibilidade entre as ferramentas.
O uso de Vite + React + Material UI + Emotion garante um fluxo ágil, moderno e sustentável para o crescimento do projeto.