import { useEffect } from 'react'
import {
  Overlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  Content,
  Title,
  Description,
  Portion,
  AddButton,
} from './styles'
import { Cardapio } from '../../models/Restaurant'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  cardapio: Cardapio
  onAddToCart: () => void
}

function formatarPreco(preco: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

export const Modal = ({
  isOpen,
  onClose,
  cardapio,
  onAddToCart,
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProductImage src={cardapio.foto} alt={cardapio.nome} />
        <Content>
          <Title>{cardapio.nome}</Title>
          <Description>{cardapio.descricao}</Description>
          <Portion>Serve: {cardapio.porcao}</Portion>
          <AddButton onClick={onAddToCart}>
            Adicionar ao carrinho - {formatarPreco(cardapio.preco)}
          </AddButton>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}
