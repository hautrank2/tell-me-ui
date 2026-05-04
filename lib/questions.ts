import { QuizQuestionModel } from '@/types/QuizModel'

export const questions: QuizQuestionModel[] = [
  {
    id: 'style',
    type: 'radio-visual',
    label: { vi: 'Phong cách tổng thể bạn muốn là gì?', en: 'What overall style do you prefer?' },
    options: [
      {
        value: 'minimal',
        label: { vi: 'Tối giản', en: 'Minimal' },
        style: { fontWeight: '300', letterSpacing: '0.05em', background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--border)', width: '120px', height: '64px', borderRadius: '4px' },
        description: { vi: 'Sạch sẽ, ít chi tiết', en: 'Clean, less is more' },
      },
      {
        value: 'modern',
        label: { vi: 'Hiện đại', en: 'Modern' },
        style: { fontWeight: '700', background: 'linear-gradient(135deg, var(--primary), #8b5cf6)', color: '#fff', width: '120px', height: '64px', borderRadius: '12px', boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)' },
        description: { vi: 'Gradient, năng động', en: 'Gradient, dynamic' },
      },
      {
        value: 'playful',
        label: { vi: 'Vui tươi', en: 'Playful' },
        style: { fontWeight: '800', background: '#fef08a', color: '#b45309', borderRadius: '32px', width: '120px', height: '64px', border: '2px solid #b45309' },
        description: { vi: 'Màu sắc, bo tròn', en: 'Bright, rounded' },
      },
      {
        value: 'corporate',
        label: { vi: 'Chuyên nghiệp', en: 'Corporate' },
        style: { fontWeight: '600', fontFamily: 'serif', background: '#1e3a5f', color: '#fff', borderRadius: '2px', width: '120px', height: '64px' },
        description: { vi: 'Nghiêm túc, đáng tin cậy', en: 'Serious, trustworthy' },
      },
    ],
  },
  {
    id: 'primaryColor',
    type: 'radio-visual',
    label: { vi: 'Màu chủ đạo (Primary) bạn thích?', en: 'What primary color do you prefer?' },
    options: [
      { value: '#6366f1', label: { vi: 'Indigo', en: 'Indigo' }, preview: { background: '#6366f1', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#3b82f6', label: { vi: 'Blue', en: 'Blue' }, preview: { background: '#3b82f6', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#10b981', label: { vi: 'Emerald', en: 'Emerald' }, preview: { background: '#10b981', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#f43f5e', label: { vi: 'Rose', en: 'Rose' }, preview: { background: '#f43f5e', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#f59e0b', label: { vi: 'Amber', en: 'Amber' }, preview: { background: '#f59e0b', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#8b5cf6', label: { vi: 'Violet', en: 'Violet' }, preview: { background: '#8b5cf6', width: '48px', height: '48px', borderRadius: '50%' } },
      { value: '#09090b', label: { vi: 'Black', en: 'Black' }, preview: { background: '#09090b', width: '48px', height: '48px', borderRadius: '50%' } },
    ],
    defaultValue: '#6366f1',
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
      { 
        value: 'inter', 
        label: { vi: 'Inter (Sans-serif)', en: 'Inter (Sans-serif)' }, 
        preview: { fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontSize: '18px', fontWeight: '400', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Hiện đại, tối giản và vô cùng dễ đọc trên màn hình.',
        description: { vi: 'Gọn gàng, trung tính', en: 'Clean, neutral' } 
      },
      { 
        value: 'roboto', 
        label: { vi: 'Roboto (Sans-serif)', en: 'Roboto (Sans-serif)' }, 
        preview: { fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '18px', fontWeight: '400', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Cứng cáp nhưng vẫn thân thiện, thiết kế chuẩn Google.',
        description: { vi: 'Phổ biến, thân thiện', en: 'Popular, friendly' } 
      },
      { 
        value: 'playfair', 
        label: { vi: 'Playfair Display (Serif)', en: 'Playfair Display (Serif)' }, 
        preview: { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', fontWeight: '500', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Mang đến cảm giác cổ điển, thanh lịch và cao cấp.',
        description: { vi: 'Cổ điển, sang trọng', en: 'Classic, elegant' } 
      },
      { 
        value: 'merriweather', 
        label: { vi: 'Merriweather (Serif)', en: 'Merriweather (Serif)' }, 
        preview: { fontFamily: 'Merriweather, "Times New Roman", serif', fontSize: '18px', fontWeight: '400', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Thiết kế đặc biệt để dễ đọc trên màn hình kỹ thuật số.',
        description: { vi: 'Truyền thống, dễ đọc', en: 'Traditional, highly readable' } 
      },
      { 
        value: 'mono', 
        label: { vi: 'JetBrains Mono (Monospace)', en: 'JetBrains Mono (Monospace)' }, 
        preview: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '16px', fontWeight: '400', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Dành cho các sản phẩm công nghệ hoặc kỹ thuật.',
        description: { vi: 'Kỹ thuật, độc đáo', en: 'Technical, unique' } 
      },
      { 
        value: 'quicksand', 
        label: { vi: 'Quicksand (Rounded)', en: 'Quicksand (Rounded)' }, 
        preview: { fontFamily: 'Quicksand, "Comic Sans MS", cursive, sans-serif', fontSize: '18px', fontWeight: '500', padding: '16px', background: 'var(--card)', color: 'var(--foreground)', textAlign: 'left' }, 
        previewClass: 'w-full whitespace-normal break-words',
        previewText: 'Aa - The quick brown fox jumps over the lazy dog. Vui nhộn, thân thiện và các nét chữ được bo tròn.',
        description: { vi: 'Mềm mại, đáng yêu', en: 'Soft, playful' } 
      },
    ],
  },
  {
    id: 'animation',
    type: 'radio-visual',
    label: { vi: 'Kiểu animation / hiệu ứng bạn muốn?', en: 'What animation style do you prefer?' },
    options: [
      { 
        value: 'none', 
        label: { vi: 'Không có (Tĩnh)', en: 'None (Static)' },
        preview: { width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' }
      },
      { 
        value: 'fade', 
        label: { vi: 'Fade', en: 'Fade' },
        description: { vi: 'Mờ dần mượt mà', en: 'Smooth transition' },
        preview: { width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' },
        previewClass: 'animate-fade'
      },
      { 
        value: 'slide', 
        label: { vi: 'Slide', en: 'Slide' },
        description: { vi: 'Trượt nhẹ nhàng', en: 'Gentle sliding' },
        preview: { width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' },
        previewClass: 'animate-slide'
      },
      { 
        value: 'bounce', 
        label: { vi: 'Bounce', en: 'Bounce' },
        description: { vi: 'Nảy vui nhộn', en: 'Playful spring' },
        preview: { width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' },
        previewClass: 'animate-bounce'
      },
    ],
  },
  {
    id: 'features',
    type: 'textarea',
    label: { vi: 'Các tính năng / yêu cầu thêm?', en: 'Additional features or requirements?' },
    placeholder: { vi: 'VD: Dark mode, đa ngôn ngữ, tối ưu SEO...', en: 'E.g. Dark mode, multi-language, SEO...' },
    optional: true,
  },
  {
    id: 'description',
    type: 'textarea',
    label: { vi: 'Bạn muốn thêm gì không? Mô tả chi tiết hơn về website.', en: 'Anything else to add? Describe your website in detail.' },
    placeholder: { vi: 'VD: Tôi muốn website trông giống Notion nhưng màu xanh lá...', en: 'E.g. I want it to look like Notion but in green...' },
    optional: true,
  },
]
