import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import { render } from '@testing-library/vue'
import { QSpinner } from 'quasar-framework';

describe('LoadSpinner.vue', () => {

  it('shows loading', async () => {
    const {queryByText} = render(LoadSpinner, {props: { isLoading: false }})

    // expect(queryByText(/Loading.../i)).not.toBeInTheDocument()
    expect(wrapper.contains(QSpinner)).toBe(false)
  })

  it('does not show loading', async () => {
    const {findByText} = render(LoadSpinner, {props: { isLoading: true }})

    // expect(await findByText((/Loading.../i))).toBeInTheDocument()
    expect(wrapper.contains(QSpinner)).toBe(true)
  })
})
