"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { ArrayKeys } from "zod";

export function ChapterSelect({
  initialChapter,
  chapterName,
}: {
  initialChapter: string;
  chapterName: any[];
}) {
  const [chapter, setChapter] = useState(initialChapter ?? "");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setChapter(initialChapter);
  }, [initialChapter]);
  return (
    <Select
      value={chapter}
      onValueChange={(e) => {
        setChapter;
        router.replace(`/webtoon/lost-in-translation/${encodeURIComponent(e)}`);
        router.refresh();
      }}
    >
      <SelectTrigger className="max-w-[280px]">
        <SelectValue placeholder={chapter}>{chapter}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {chapterName.map(
          (selection: { key: Key; slug: string; name: string }) => (
            <SelectItem key={selection.key} value={selection.slug}>
              {selection.name}
            </SelectItem>
          )
        )}
        {/* <SelectItem value="prologue">Prologue</SelectItem>
        <SelectItem value="episode-1">Episode 1</SelectItem>
        <SelectItem value="episode-2">Episode 2</SelectItem>
        <SelectItem value="episode-3">Episode 3</SelectItem>
        <SelectItem value="episode-4">Episode 4</SelectItem>
        <SelectItem value="episode-5">Episode 5</SelectItem>
        <SelectItem value="episode-6">Episode 6</SelectItem>
        <SelectItem value="episode-7">Episode 7</SelectItem>
        <SelectItem value="episode-8">Episode 8</SelectItem>
        <SelectItem value="episode-9">Episode 9</SelectItem>
        <SelectItem value="episode-10">Episode 10</SelectItem>
        <SelectItem value="episode-11">Episode 11</SelectItem>
        <SelectItem value="episode-12">Episode 12</SelectItem>
        <SelectItem value="episode-13">Episode 13</SelectItem>
        <SelectItem value="episode-14">Episode 14</SelectItem>
        <SelectItem value="episode-15">Episode 15</SelectItem>
        <SelectItem value="episode-16">Episode 16</SelectItem>
        <SelectItem value="episode-17">Episode 17</SelectItem>
        <SelectItem value="episode-18">Episode 18</SelectItem>
        <SelectItem value="episode-19">Episode 19</SelectItem>
        <SelectItem value="episode-20">Episode 20</SelectItem>
        <SelectItem value="episode-21">Episode 21</SelectItem>
        <SelectItem value="episode-22">Episode 22</SelectItem>
        <SelectItem value="episode-23">Episode 23</SelectItem>
        <SelectItem value="episode-24">Episode 24</SelectItem>
        <SelectItem value="episode-25">Episode 25</SelectItem>
        <SelectItem value="episode-26">Episode 26</SelectItem>
        <SelectItem value="episode-27">Episode 27</SelectItem>
        <SelectItem value="episode-28">Episode 28</SelectItem>
        <SelectItem value="episode-29">Episode 29</SelectItem>
        <SelectItem value="episode-30">Episode 30</SelectItem>
        <SelectItem value="episode-31">Episode 31</SelectItem>
        <SelectItem value="episode-32">Episode 32</SelectItem>
        <SelectItem value="episode-33">Episode 33</SelectItem>
        <SelectItem value="episode-34">Episode 34</SelectItem>
        <SelectItem value="episode-35">Episode 35</SelectItem>
        <SelectItem value="episode-36">Episode 36</SelectItem>
        <SelectItem value="episode-37">Episode 37</SelectItem>
        <SelectItem value="episode-38">Episode 38</SelectItem>
        <SelectItem value="episode-39">Episode 39</SelectItem>
        <SelectItem value="episode-40">Episode 40</SelectItem>
        <SelectItem value="episode-41">Episode 41</SelectItem>
        <SelectItem value="episode-42">Episode 42</SelectItem>
        <SelectItem value="episode-43">Episode 43</SelectItem>
        <SelectItem value="episode-44">Episode 44</SelectItem>
        <SelectItem value="episode-45">Episode 45</SelectItem>
        <SelectItem value="episode-46">Episode 46</SelectItem>
        <SelectItem value="be-the-change-mv-making-film">
          Be The Change MV Making Film
        </SelectItem>
        <SelectItem value="episode-47">Episode 47</SelectItem>
        <SelectItem value="episode-48">Episode 48</SelectItem>
        <SelectItem value="episode-49">Episode 49</SelectItem>
        <SelectItem value="episode-50">Episode 50</SelectItem>
        <SelectItem value="episode-51">Episode 51</SelectItem>
        <SelectItem value="episode-52">Episode 52</SelectItem>
        <SelectItem value="episode-53">Episode 53</SelectItem>
        <SelectItem value="episode-54">Episode 54</SelectItem>
        <SelectItem value="episode-55">Episode 55</SelectItem>
        <SelectItem value="episode-56">Episode 56</SelectItem>
        <SelectItem value="episode-57">Episode 57</SelectItem>
        <SelectItem value="episode-58">Episode 58</SelectItem>
        <SelectItem value="episode-59">Episode 59</SelectItem>
        <SelectItem value="episode-60">Episode 60</SelectItem>
        <SelectItem value="episode-61">Episode 61</SelectItem>
        <SelectItem value="episode-62">Episode 62</SelectItem>
        <SelectItem value="episode-63">Episode 63</SelectItem>
        <SelectItem value="episode-64">Episode 64</SelectItem>
        <SelectItem value="episode-65">Episode 65</SelectItem>
        <SelectItem value="episode-66">Episode 66</SelectItem>
        <SelectItem value="episode-67">Episode 67</SelectItem>
        <SelectItem value="episode-68">Episode 68</SelectItem>
        <SelectItem value="episode-69">Episode 69</SelectItem>
        <SelectItem value="episode-70">Episode 70</SelectItem>
        <SelectItem value="episode-71">Episode 71</SelectItem>
        <SelectItem value="episode-72">Episode 72</SelectItem>
        <SelectItem value="episode-73">Episode 73</SelectItem>
        <SelectItem value="episode-74">Episode 74</SelectItem>
        <SelectItem value="episode-75">Episode 75</SelectItem>
        <SelectItem value="episode-76">Episode 76</SelectItem>
        <SelectItem value="episode-77">Episode 77</SelectItem>
        <SelectItem value="episode-78">Episode 78</SelectItem>
        <SelectItem value="episode-79">Episode 79</SelectItem>
        <SelectItem value="episode-80">Episode 80</SelectItem>
        <SelectItem value="episode-81">Episode 81</SelectItem>
        <SelectItem value="episode-82">Episode 82</SelectItem>
        <SelectItem value="episode-83">Episode 83</SelectItem>
        <SelectItem value="episode-84">Episode 84</SelectItem>
        <SelectItem value="episode-85">Episode 85</SelectItem>
        <SelectItem value="episode-86">Episode 86</SelectItem>
        <SelectItem value="episode-87">Episode 87</SelectItem>
        <SelectItem value="episode-88">Episode 88</SelectItem>
        <SelectItem value="episode-89">Episode 89</SelectItem>
        <SelectItem value="episode-90">Episode 90</SelectItem>
        <SelectItem value="episode-91">Episode 91</SelectItem>
        <SelectItem value="episode-92">Episode 92</SelectItem>
        <SelectItem value="episode-93">Episode 93</SelectItem>
        <SelectItem value="episode-94">Episode 94</SelectItem>
        <SelectItem value="episode-95">Episode 95</SelectItem>
        <SelectItem value="episode-96">Episode 96</SelectItem>
        <SelectItem value="episode-97">Episode 97</SelectItem>
        <SelectItem value="episode-98">Episode 98</SelectItem>
        <SelectItem value="episode-99">Episode 99</SelectItem>
        <SelectItem value="episode-100">Episode 100</SelectItem>
        <SelectItem value="episode-101">Episode 101</SelectItem>
        <SelectItem value="episode-102">Episode 102</SelectItem>
        <SelectItem value="episode-103">Episode 103</SelectItem>
        <SelectItem value="episode-104">Episode 104</SelectItem>
        <SelectItem value="episode-105">Episode 105</SelectItem>
        <SelectItem value="episode-106">Episode 106</SelectItem>
        <SelectItem value="episode-107">Episode 107</SelectItem>
        <SelectItem value="episode-108">Episode 108</SelectItem>
        <SelectItem value="episode-109">Episode 109</SelectItem>
        <SelectItem value="episode-110">Episode 110</SelectItem>
        <SelectItem value="episode-111">Episode 111</SelectItem>
        <SelectItem value="episode-112">Episode 112</SelectItem>
        <SelectItem value="episode-113">Episode 113</SelectItem>
        <SelectItem value="episode-114">Episode 114</SelectItem>
        <SelectItem value="episode-115">Episode 115</SelectItem>
        <SelectItem value="episode-116">Episode 116</SelectItem>
        <SelectItem value="episode-117">Episode 117</SelectItem>
        <SelectItem value="episode-118">Episode 118</SelectItem>
        <SelectItem value="episode-119">Episode 119</SelectItem>
        <SelectItem value="episode-120">Episode 120</SelectItem>
        <SelectItem value="episode-121">Episode 121</SelectItem>
        <SelectItem value="episode-122">Episode 122</SelectItem>
        <SelectItem value="episode-123">Episode 123</SelectItem>
        <SelectItem value="episode-124">Episode 124</SelectItem>
        <SelectItem value="episode-125">Episode 125</SelectItem>
        <SelectItem value="episode-126">Episode 126</SelectItem>
        <SelectItem value="episode-127">Episode 127</SelectItem>
        <SelectItem value="episode-128">Episode 128</SelectItem>
        <SelectItem value="episode-129">Episode 129</SelectItem>
        <SelectItem value="episode-130">Episode 130</SelectItem>
        <SelectItem value="episode-131">Episode 131</SelectItem>
        <SelectItem value="episode-132">Episode 132</SelectItem>
        <SelectItem value="episode-133">Episode 133</SelectItem>
        <SelectItem value="episode-134">Episode 134</SelectItem>
        <SelectItem value="episode-135">Episode 135</SelectItem>
        <SelectItem value="episode-136">Episode 136</SelectItem>
        <SelectItem value="episode-137">Episode 137</SelectItem>
        <SelectItem value="episode-138">Episode 138</SelectItem>
        <SelectItem value="episode-139">Episode 139</SelectItem>
        <SelectItem value="episode-140">Episode 140</SelectItem>
        <SelectItem value="episode-141">Episode 141</SelectItem>
        <SelectItem value="episode-142">Episode 142</SelectItem>
        <SelectItem value="episode-143">Episode 143</SelectItem>
        <SelectItem value="episode-144">Episode 144</SelectItem>
        <SelectItem value="episode-145">Episode 145</SelectItem>
        <SelectItem value="episode-146">Episode 146</SelectItem>
        <SelectItem value="episode-147">Episode 147</SelectItem>
        <SelectItem value="episode-148">Episode 148</SelectItem>
        <SelectItem value="episode-149">Episode 149</SelectItem>
        <SelectItem value="episode-150">Episode 150</SelectItem>
        <SelectItem value="episode-151">Episode 151</SelectItem>
        <SelectItem value="episode-152">Episode 152</SelectItem>
        <SelectItem value="episode-153">Episode 153</SelectItem>
        <SelectItem value="episode-154">Episode 154</SelectItem>
        <SelectItem value="episode-155">Episode 155</SelectItem>
        <SelectItem value="episode-156">Episode 156</SelectItem>
        <SelectItem value="episode-157">Episode 157</SelectItem>
        <SelectItem value="episode-158">Episode 158</SelectItem>
        <SelectItem value="episode-159">Episode 159</SelectItem>
        <SelectItem value="episode-160">Episode 160</SelectItem>
        <SelectItem value="episode-161">Episode 161</SelectItem>
        <SelectItem value="episode-162">Episode 162</SelectItem>
        <SelectItem value="episode-163">Episode 163</SelectItem>
        <SelectItem value="episode-164">Episode 164</SelectItem>
        <SelectItem value="episode-165">Episode 165</SelectItem>
        <SelectItem value="episode-166">Episode 166</SelectItem>
        <SelectItem value="episode-167">Episode 167</SelectItem>
        <SelectItem value="episode-168">Episode 168</SelectItem>
        <SelectItem value="episode-169">Episode 169</SelectItem>
        <SelectItem value="episode-170">Episode 170</SelectItem>
        <SelectItem value="episode-171">Episode 171</SelectItem>
        <SelectItem value="episode-172">Episode 172</SelectItem>
        <SelectItem value="episode-173">Episode 173</SelectItem>
        <SelectItem value="episode-174">Episode 174</SelectItem>
        <SelectItem value="episode-175">Episode 175</SelectItem>
        <SelectItem value="episode-176">Episode 176</SelectItem>
        <SelectItem value="episode-177">Episode 177</SelectItem>
        <SelectItem value="episode-178">Episode 178</SelectItem>
        <SelectItem value="episode-179">Episode 179</SelectItem>
        <SelectItem value="episode-180">Episode 180</SelectItem>
        <SelectItem value="episode-181">Episode 181</SelectItem>
        <SelectItem value="episode-182">Episode 182</SelectItem> */}
      </SelectContent>
    </Select>
  );
}
