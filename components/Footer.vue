<template>
  <footer class="footer">
    <div>
      <figure>
        <img src="~/assets/images/light-logo.svg" alt="Coffeeroasters Logo" />
      </figure>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
        <li><NuxtLink to="/subscribe">Create Your Plan</NuxtLink></li>
      </ul>
    </div>
    <SocialMedia />
  </footer>
</template>

<style>
.footer {
  background-color: var(--color-500);
  color: var(--color-400);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 34.6rem;
  margin: 0 24px 72px;
  padding: 5.4rem 0;
  text-align: center;
}

.footer figure {
  height: 2.4rem;
}

.footer ul {
  list-style: none;
  margin-top: 4.75rem;
}

.footer ul li {
  font-family: 'Barlow', serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.092rem;
  line-height: 1.5rem;
  text-transform: uppercase;
}

.footer ul li:nth-of-type(2) {
  margin: 2.4rem 0;
}

@media (min-width: 540px) {
  .footer {
    margin: 0 40px 72px;
  }
}

@media (min-width: 640px) {
  .footer {
    height: 27rem;
  }

  .footer figure {
    height: 2.6rem;
  }

  .footer ul {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
  }

  .footer ul li:nth-of-type(2) {
    margin: 0 3.2rem 0;
  }

  .footer ul li:hover {
    color: var(--color-100);
  }
}

@media (min-width: 1024px) {
  .footer {
    margin: 0 80px 88px;
  }
}

@media (min-width: 1280px) {
  .footer {
    align-items: center;
    flex-direction: row;
    height: 120px;
    padding: 0 85px;
  }

  .footer div:first-of-type {
    align-items: center;
    display: flex;
  }

  .footer ul {
    margin: 0 0 0 103px;
  }
}
</style>
