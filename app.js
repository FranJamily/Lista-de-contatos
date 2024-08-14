// Array para armazenar os contatos Rosáliaaaaaaaaaaaaaaaaaaaaaaaaaa
let contatos = [];

/**
 * Função para atualizar a listagem de contatos exibida na página.
 */
function atualizarLista() {
    // Obtém o elemento HTML onde a lista de contatos será exibida
    const listaContatos = document.getElementById('listaContatos');
    // Limpa o conteúdo atual da lista de contatos
    listaContatos.innerHTML = '';

    // Itera sobre cada contato na array contatos
    contatos.forEach((contato, index) => {
        // Cria um novo item de lista para o contato
        const li = document.createElement('li');
        // Define o texto do item da lista com as informações do contato
        li.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;
        
        // Cria um botão de "Editar"
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        // Define o evento de clique do botão para chamar a função editarContato com o índice do contato
        btnEditar.onclick = () => editarContato(index);

        // Cria um botão de "Excluir"
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        // Define o evento de clique do botão para chamar a função excluirContato com o índice do contato
        btnExcluir.onclick = () => excluirContato(index);
        
        // Adiciona os botões ao item da lista
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        // Adiciona o item da lista ao elemento da lista de contatos
        listaContatos.appendChild(li);
    });
}

/**
 * Função para adicionar um novo contato.
 * Esta função é chamada quando o formulário de contato é enviado.
 */
document.getElementById('contatoForm').onsubmit = function(event) {
    // Impede o comportamento padrão do formulário (enviar uma requisição e recarregar a página)
    event.preventDefault();
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    
    // Adiciona um novo objeto de contato à array contatos
    contatos.push({ nome, telefone, email });
    // Atualiza a lista de contatos na página
    atualizarLista();
    // Limpa os campos do formulário
    document.getElementById('contatoForm').reset();
};

/**
 * Função para editar um contato.
 * Esta função é chamada quando o botão de editar é clicado.
 */
function editarContato(index) {
    // Obtém o contato que será editado
    const contato = contatos[index];
    // Preenche os campos do formulário com as informações do contato
    document.getElementById('nome').value = contato.nome;
    document.getElementById('telefone').value = contato.telefone;
    document.getElementById('email').value = contato.email;
    
    // Remove o contato da array contatos (pois ele será adicionado novamente após a edição)
    contatos.splice(index, 1);
    // Atualiza a lista de contatos na página
    atualizarLista();
}

/**
 * Função para excluir um contato.
 * Esta função é chamada quando o botão de excluir é clicado.
 */
function excluirContato(index) {
    // Remove o contato da array contatos
    contatos.splice(index, 1);
    // Atualiza a lista de contatos na página
    atualizarLista();
}

/**
 * Função para buscar contatos.
 * Esta função é chamada quando o valor do campo de busca muda.
 */
document.getElementById('buscar').oninput = function() {
    // Obtém o valor de busca e converte para minúsculas
    const termo = this.value.toLowerCase();
    // Obtém o elemento HTML onde a lista de contatos será exibida
    const listaContatos = document.getElementById('listaContatos');
    // Limpa o conteúdo atual da lista de contatos
    listaContatos.innerHTML = '';

    // Filtra a array contatos para incluir apenas aqueles que correspondem ao termo de busca
    contatos
        .filter(contato => contato.nome.toLowerCase().includes(termo) || contato.telefone.includes(termo) || contato.email.toLowerCase().includes(termo))
        .forEach((contato, index) => {
            // Cria um novo item de lista para o contato filtrado
            const li = document.createElement('li');
            // Define o texto do item da lista com as informações do contato
            li.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;
            
            // Cria um botão de "Editar"
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            // Define o evento de clique do botão para chamar a função editarContato com o índice do contato
            btnEditar.onclick = () => editarContato(index);

            // Cria um botão de "Excluir"
            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            // Define o evento de clique do botão para chamar a função excluirContato com o índice do contato
            btnExcluir.onclick = () => excluirContato(index);
            
            // Adiciona os botões ao item da lista
            li.appendChild(btnEditar);
            li.appendChild(btnExcluir);
            // Adiciona o item da lista ao elemento da lista de contatos
            listaContatos.appendChild(li);
        });
};

