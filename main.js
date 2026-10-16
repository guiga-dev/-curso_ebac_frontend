const retry = document.querySelector('#tentar-novamente');
const status = document.querySelector('#status');

async function carregarPerfil() {
    retry.hidden = true;
    status.textContent = 'Consultando a API do GitHub…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
        const response = await fetch('https://api.github.com/users/guiga-dev', {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' }
        });
        if (!response.ok) throw new Error(`GitHub respondeu HTTP ${response.status}.`);
        const profile = await response.json();
        if (!profile.login || !profile.html_url) throw new Error('Perfil inválido na resposta.');
        document.querySelector('.profile-name').textContent = profile.name || profile.login;
        document.querySelector('.profile-username').textContent = `@${profile.login}`;
        const avatar = document.querySelector('.profile-avatar');
        avatar.src = profile.avatar_url;
        avatar.alt = `Foto de ${profile.name || profile.login}`;
        avatar.hidden = false;
        document.querySelector('#repositorios').textContent = profile.public_repos;
        document.querySelector('#seguidores').textContent = profile.followers;
        document.querySelector('#seguindo').textContent = profile.following;
        const link = document.querySelector('.profile-link');
        link.href = profile.html_url;
        link.hidden = false;
        status.textContent = 'Perfil atualizado com dados públicos do GitHub.';
    } catch (error) {
        document.querySelector('.profile-username').textContent = 'Não foi possível carregar o perfil';
        status.textContent = error.name === 'AbortError'
            ? 'A consulta demorou demais. Tente novamente.'
            : `Falha na consulta. ${error.message}`;
        retry.hidden = false;
    } finally {
        clearTimeout(timeout);
    }
}
retry.addEventListener('click', carregarPerfil);
carregarPerfil();
