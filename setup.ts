import '@testing-library/jest-dom/vitest'
import { server } from './mocks/server'
import { beforeAll } from 'vitest'
import { afterEach } from 'vitest'
import { afterAll } from 'vitest'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})
