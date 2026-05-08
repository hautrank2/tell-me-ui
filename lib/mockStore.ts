interface MockQuizResult {
  token: string
  answers: Record<string, any>
  lang: string
  createdAt: Date
  updatedAt: Date
}

const store = new Map<string, MockQuizResult>()

export const mockStore = {
  create: async (data: Omit<MockQuizResult, 'createdAt' | 'updatedAt'>) => {
    const now = new Date()
    const result = {
      ...data,
      createdAt: now,
      updatedAt: now,
    }
    store.set(data.token, result)
    return result
  },

  findOne: async (query: { token: string }) => {
    return store.get(query.token) || null
  },

  findOneAndUpdate: async (query: { token: string }, update: any) => {
    const result = store.get(query.token)
    if (!result) return null

    const updatedResult = {
      ...result,
      answers: update.$set?.answers || result.answers,
      updatedAt: new Date(),
    }
    store.set(query.token, updatedResult)
    return updatedResult
  },
}
