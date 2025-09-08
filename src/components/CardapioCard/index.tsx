import { useState } from 'react'
import { Modal } from '../Modal'
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton,
} from './styles'
import { Cardapio } from '../../models/Restaurant'

type CardProps = {
  cardapio: Cardapio
  onAddToCart: () => void
}

export const MenuCard = ({ cardapio, onAddToCart }: CardProps) => {
  const [open, setOpen] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 166) {
      return descricao.slice(0, 163) + '...'
    }

    return descricao
  }

  return (
    <>
      <CardContainer>
        <CardImage src={cardapio.foto} alt={cardapio.nome} />
        <CardTitle>{cardapio.nome}</CardTitle>
        <CardDescription>{getDescricao(cardapio.descricao)}</CardDescription>
        <CardButton onClick={() => setOpen(true)}>
          Adicionar ao carrinho
        </CardButton>
      </CardContainer>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        cardapio={cardapio}
        onAddToCart={() => {
          onAddToCart()
          setOpen(false)
        }}
      />
    </>
  )
}
