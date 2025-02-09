import { render, screen } from '@testing-library/react'
import Post from '..'

jest.mock('../../PostComments', () => () => (
    <div data-testid="post-comments">
        <p data-testid="comment-item">Primeiro comentário</p>
        <p data-testid="comment-item">Segundo comentário</p>
    </div>
))

describe('Teste para o componente Post', () => {
    test('Deve renderizar corretamente e exibir dois comentários', () => {
        render(<Post imageUrl="https://example.com/image.jpg">Texto do post</Post>)

        expect(screen.getByTestId('post-text')).toHaveTextContent('Texto do post')

        const comentarios = screen.getAllByTestId('comment-item')
        expect(comentarios[0]).toHaveTextContent('Primeiro comentário')
        expect(comentarios[1]).toHaveTextContent('Segundo comentário')
    })
})
