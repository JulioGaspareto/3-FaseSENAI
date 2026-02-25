CREATE DATABASE controle_almoxerifado;

USE controle_almoxerifado;

CREATE TABLE produtos (
	id INT primary key auto_increment,
    titulo Varchar(150) Not NULL,
    categoria varchar(80) not null,
    valor_unitario decimal(10,2) not null,
    estoque_minimo int not null default 0,
    estoque_maximo int not null default 0,
    created_at timestamp default current_timestamp
);
CREATE TABLE movimentacoes(
	id INT primary key auto_increment,
	produtos_id int not null,
    tipo ENUM('ENTRADA', 'SAIDA') NOT NULL,
    quantidade int not null,
    data_movimentacao datetime not null default current_timestamp,
    created_at timestamp default current_timestamp,
    CONSTRAINT fk_movimentacoes_produtos
FOREIGN KEY (produtos_id) REFERENCES produtos(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);


INSERT INTO produtos (titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo)
VALUES('Dom Casmurro', 'Romance', 45.00, 2, 20),
('Capitaes da Areia', 'Literatura Brasileira', 39.90, 2, 15),
('Clean Code', 'Tecnologia', 120.00, 1, 10);
INSERT INTO movimentacoes (produtos_id, tipo, quantidade, data_movimentacao) VALUES
(1, 'ENTRADA', 10, '2026-01-03 09:00:00'),
(1, 'SAIDA', 3, '2026-01-10 15:10:00'),
(1, 'SAIDA', 2, '2026-01-15 11:30:00'),
(2, 'ENTRADA', 8, '2026-01-04 10:00:00'),
(2, 'SAIDA', 4, '2026-01-17 16:00:00'),
(3, 'ENTRADA', 6, '2026-01-05 08:30:00'),
(3, 'SAIDA', 1, '2026-01-20 13:15:00');

create VIEW vw_estoque as
SELECT p.id as produtos_id,
p.titulo,
p.categoria,
p.valor_unitario,
SUM(
CASE
WHEN m.tipo = 'ENTRADA' THEN m.quantidade
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade
    ELSE 0
END) as saldo_estoque,
SUM(
CASE
WHEN m.tipo = 'ENTRADA' THEN m.quantidade
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade
    ELSE 0
END) * p.valor_unitario as valor_total_item
from produtos p
left join movimentacoes m on m.produtos_id = p.id
group by p.id,
p.titulo,
p.categoria,
p.valor_unitario;



SELECT * FROM vw_estoque



