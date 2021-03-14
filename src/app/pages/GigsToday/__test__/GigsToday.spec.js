import GigsToday from '@/app/pages/GigsToday/GigsToday.vue';
import { renderComponent } from '@test/render-utils';
import { FIRST_DAY } from '../../../services/__mocks__/gigs-sample'
import { stubNow } from '../../../../../test/helpers';

jest.mock('@/app/services/jota-api')

describe('Gigs Today', () => {

  it('renders today gigs', async () => {
    stubNow('2017-09-18 00:00:00')

    const {findByText} = await renderComponent(GigsToday)

    expect(await findByText(FIRST_DAY.gigs[0].title)).toBeInTheDocument()
  })
})
