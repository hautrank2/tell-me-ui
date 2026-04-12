export type Lang = 'vi' | 'en'

export type QuestionType = 'radio-visual' | 'color' | 'select' | 'text' | 'textarea'

export interface Option {
  value: string
  label: { vi: string; en: string }
  description?: { vi: string; en: string }
  style?: React.CSSProperties
  preview?: React.CSSProperties
}

export interface Question {
  id: string
  type: QuestionType
  label: { vi: string; en: string }
  options?: Option[]
  defaultValue?: string
  placeholder?: { vi: string; en: string }
}

export const questions: Question[] = [
  {
    id: 'style',
    type: 'radio-visual',
    label: { vi: 'Phong cách tổng thể bạn muốn là gì?', en: 'What overall style do you prefer?' },
    options: [
      {
        value: 'minimal',
        label: { vi: 'Tối giản', en: 'Minimal' },
        style: { fontWeight: '300', letterSpacing: '0.1em', background: '#fafafa', color: '#111' },
        description: { vi: 'Sạch sẽ, ít chi tiết', en: 'Clean, less is more' },
      },
      {
        value: 'modern',
        label: { vi: 'Hiện đại', en: 'Modern' },
        style: { fontWeight: '700', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff' },
        description: { vi: 'Gradient, bold, năng động', en: 'Gradient, bold, dynamic' },
      },
      {
        value: 'playful',
        label: { vi: 'Vui tươi', en: 'Playful' },
        style: { fontWeight: '800', background: '#fef08a', color: '#b45309', borderRadius: '20px' },
        description: { vi: 'Màu sắc tươi sáng, bo tròn', en: 'Bright colors, rounded shapes' },
      },
      {
        value: 'corporate',
        label: { vi: 'Chuyên nghiệp', en: 'Corporate' },
        style: { fontWeight: '500', background: '#1e3a5f', color: '#fff', borderRadius: '2px' },
        description: { vi: 'Nghiêm túc, đáng tin cậy', en: 'Serious, trustworthy' },
      },
    ],
  },
  {
    id: 'primaryColor',
    type: 'color',
    label: { vi: 'Màu chủ đạo (Primary) bạn thích?', en: 'What primary color do you prefer?' },
    defaultValue: '#6366f1',
  },
  {
    id: 'secondaryColor',
    type: 'color',
    label: { vi: 'Màu phụ (Secondary) bạn thích?', en: 'What secondary color do you prefer?' },
    defaultValue: '#f59e0b',
  },
  {
    id: 'borderRadius',
    type: 'radio-visual',
    label: { vi: 'Độ bo tròn góc bạn muốn?', en: 'How rounded should the corners be?' },
    options: [
      { value: 'none', label: { vi: 'Sắc nét', en: 'Sharp' }, preview: { borderRadius: '0px', width: '64px', height: '40px', background: '#6366f1' } },
      { value: 'sm', label: { vi: 'Nhẹ', en: 'Slight' }, preview: { borderRadius: '4px', width: '64px', height: '40px', background: '#6366f1' } },
      { value: 'md', label: { vi: 'Vừa', en: 'Medium' }, preview: { borderRadius: '12px', width: '64px', height: '40px', background: '#6366f1' } },
      { value: 'lg', label: { vi: 'Mềm mại', en: 'Soft' }, preview: { borderRadius: '20px', width: '64px', height: '40px', background: '#6366f1' } },
      { value: 'full', label: { vi: 'Pill', en: 'Pill' }, preview: { borderRadius: '9999px', width: '64px', height: '40px', background: '#6366f1' } },
    ],
  },
  {
    id: 'shadow',
    type: 'radio-visual',
    label: { vi: 'Độ đổ bóng bạn muốn?', en: 'What level of shadow depth do you prefer?' },
    options: [
      { value: 'flat', label: { vi: 'Phẳng', en: 'Flat' }, preview: { boxShadow: 'none', width: '64px', height: '40px', background: '#fff', border: '1px solid #e5e7eb' } },
      { value: 'subtle', label: { vi: 'Nhẹ', en: 'Subtle' }, preview: { boxShadow: '0 1px 3px rgba(0,0,0,0.12)', width: '64px', height: '40px', background: '#fff' } },
      { value: 'medium', label: { vi: 'Vừa', en: 'Medium' }, preview: { boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '64px', height: '40px', background: '#fff' } },
      { value: 'bold', label: { vi: 'Nổi bật', en: 'Bold' }, preview: { boxShadow: '0 10px 30px rgba(0,0,0,0.25)', width: '64px', height: '40px', background: '#fff' } },
    ],
  },
  {
    id: 'typography',
    type: 'radio-visual',
    label: { vi: 'Phong cách chữ bạn thích?', en: 'What typography style do you prefer?' },
    options: [
      { value: 'sans', label: { vi: 'Sans-serif', en: 'Sans-serif' }, preview: { fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '600' }, description: { vi: 'Hiện đại, dễ đọc', en: 'Modern, clean' } },
      { value: 'serif', label: { vi: 'Serif', en: 'Serif' }, preview: { fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '600' }, description: { vi: 'Sang trọng, truyền thống', en: 'Elegant, classic' } },
      { value: 'mono', label: { vi: 'Monospace', en: 'Monospace' }, preview: { fontFamily: 'monospace', fontSize: '16px', fontWeight: '600' }, description: { vi: 'Kỹ thuật, đặc biệt', en: 'Technical, unique' } },
    ],
  },
  {
    id: 'density',
    type: 'radio-visual',
    label: { vi: 'Mật độ nội dung bạn muốn?', en: 'How dense should the layout feel?' },
    options: [
      { value: 'airy', label: { vi: 'Thoáng', en: 'Airy' }, description: { vi: 'Nhiều khoảng trắng, dễ thở', en: 'Lots of whitespace, breathable' } },
      { value: 'balanced', label: { vi: 'Vừa phải', en: 'Balanced' }, description: { vi: 'Cân bằng giữa nội dung và khoảng trắng', en: 'Balanced content and space' } },
      { value: 'compact', label: { vi: 'Chặt chẽ', en: 'Compact' }, description: { vi: 'Nhiều thông tin, tiết kiệm không gian', en: 'Information-dense, efficient' } },
    ],
  },
  {
    id: 'industry',
    type: 'select',
    label: { vi: 'Lĩnh vực của website?', en: 'What industry is your website for?' },
    options: [
      { value: 'tech', label: { vi: 'Công nghệ / SaaS', en: 'Tech / SaaS' } },
      { value: 'ecommerce', label: { vi: 'Thương mại điện tử', en: 'E-commerce' } },
      { value: 'portfolio', label: { vi: 'Portfolio cá nhân', en: 'Personal Portfolio' } },
      { value: 'edu', label: { vi: 'Giáo dục', en: 'Education' } },
      { value: 'health', label: { vi: 'Y tế / Sức khỏe', en: 'Health & Wellness' } },
      { value: 'food', label: { vi: 'Ẩm thực / Nhà hàng', en: 'Food & Restaurant' } },
      { value: 'agency', label: { vi: 'Sáng tạo / Agency', en: 'Creative / Agency' } },
      { value: 'other', label: { vi: 'Khác', en: 'Other' } },
    ],
  },
  {
    id: 'projectName',
    type: 'text',
    label: { vi: 'Tên dự án của bạn?', en: 'What is your project name?' },
    placeholder: { vi: 'VD: Vizform, MyShop, ...', en: 'E.g. Vizform, MyShop, ...' },
  },
  {
    id: 'description',
    type: 'textarea',
    label: { vi: 'Bạn muốn thêm gì không? Mô tả thêm về website.', en: 'Anything else to add? Describe your website.' },
    placeholder: { vi: 'VD: Tôi muốn website trông giống Notion nhưng màu xanh lá...', en: 'E.g. I want it to look like Notion but in green...' },
  },
]
